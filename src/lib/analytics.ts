export type AnalyticsEvent =
  | "start_quote"
  | "submit_quote"
  | "click_phone"
  | "submit_callback"
  | "view_model";

export function trackEvent(
  event: AnalyticsEvent,
  payload: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
