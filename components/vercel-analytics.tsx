"use client";

import { Analytics } from "@vercel/analytics/react";

export function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        const pathname = event.url
          ? new URL(event.url, window.location.origin).pathname
          : "";

        if (pathname.startsWith("/api/")) {
          return null;
        }

        return event;
      }}
    />
  );
}
