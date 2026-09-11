import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

export const VercelMetrics = () => (
  <>
    <SpeedInsights />
    <Analytics />
  </>
);
