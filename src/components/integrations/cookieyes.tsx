import Script from "next/script";

export function CookieyesScript() {
  const cookieyesId = process.env.NEXT_PUBLIC_COOKIEYES_ID;

  if (!cookieyesId) {
    return null;
  }

  return (
    <Script
      id="cookieyes"
      src={`https://cdn-cookieyes.com/client_data/${cookieyesId}/script.js`}
      strategy="afterInteractive"
    />
  );
}
