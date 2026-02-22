import postmark from "postmark";

type SendImpactEmailInput = {
  to: string;
  name?: string;
  context: "launchSignup" | "feedback";
};

const serverToken = process.env.POSTMARK_SERVER_TOKEN;
const signupTemplateIdRaw = process.env.POSTMARK_TEMPLATE_ID_SIGNUP;
const feedbackTemplateIdRaw = process.env.POSTMARK_TEMPLATE_ID_FEEDBACK;
const feedbackSubject = process.env.POSTMARK_SUBJECT_FEEDBACK;
const signupSubject = process.env.POSTMARK_SUBJECT_SIGNUP;
const eurekaCoreLogoURL = process.env.POSTMARK_EUREKACORE_LOGO_URL;
const supportURL = process.env.POSTMARK_SUPPORT_URL;
const termsAndConditionsLink = process.env.POSTMARK_TERMS_LINK;
const privacyPolicyLink = process.env.POSTMARK_PRIVACY_LINK;

function parseTemplateId(rawValue: string | undefined, envName: string): number {
  const templateId = Number(rawValue);
  if (!Number.isInteger(templateId) || templateId <= 0) {
    throw new Error(`${envName} must be a positive integer`);
  }
  return templateId;
}

function requireEnv(rawValue: string | undefined, envName: string): string {
  const value = rawValue?.trim();
  if (!value) {
    throw new Error(`Missing ${envName} environment variable`);
  }
  return value;
}

function getTemplateIdForContext(context: "launchSignup" | "feedback"): number {
  if (context === "launchSignup") {
    return parseTemplateId(
      signupTemplateIdRaw,
      "POSTMARK_TEMPLATE_ID_SIGNUP",
    );
  }

  return parseTemplateId(feedbackTemplateIdRaw, "POSTMARK_TEMPLATE_ID_FEEDBACK");
}

function getSubjectForContext(context: "launchSignup" | "feedback"): string {
  if (context === "launchSignup") {
    return requireEnv(signupSubject, "POSTMARK_SUBJECT_SIGNUP");
  }

  return requireEnv(feedbackSubject, "POSTMARK_SUBJECT_FEEDBACK");
}

export async function sendImpactTemplateEmail({
  to,
  name,
  context,
}: SendImpactEmailInput): Promise<void> {
  if (!serverToken) {
    throw new Error("Missing POSTMARK_SERVER_TOKEN environment variable");
  }

  const client = new postmark.ServerClient(serverToken);
  const templateId = getTemplateIdForContext(context);
  const subject = getSubjectForContext(context);
  const trimmedName = name?.trim() || "";

  await client.sendEmailWithTemplate({
    From: "info@eurekacore.com",
    To: to,
    TemplateId: templateId,
    TemplateModel: {
      subject,
      EurekaCoreLogoURL: requireEnv(
        eurekaCoreLogoURL,
        "POSTMARK_EUREKACORE_LOGO_URL",
      ),
      name: trimmedName ? { name: trimmedName } : {},
      supportURL: requireEnv(supportURL, "POSTMARK_SUPPORT_URL"),
      year: String(new Date().getFullYear()),
      termsAndConditionsLink: requireEnv(
        termsAndConditionsLink,
        "POSTMARK_TERMS_LINK",
      ),
      privacyPolicyLink: requireEnv(
        privacyPolicyLink,
        "POSTMARK_PRIVACY_LINK",
      ),
    },
  });
}
