"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

if (typeof window !== "undefined" && posthogKey && !posthog.__loaded) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    autocapture: false,
    capture_pageview: false,
  });
}

function PostHogPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthogKey || !pathname || pathname.startsWith("/api/")) {
      return;
    }

    posthog.capture("$pageview", {
      $current_url: window.location.href,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!posthogKey) {
    return <>{children}</>;
  }

  return (
    <PostHogReactProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageviewTracker />
      </Suspense>
      {children}
    </PostHogReactProvider>
  );
}
