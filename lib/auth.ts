// Signed session tokens for the password gate. Uses Web Crypto (SubtleCrypto)
// so the same code runs in both the Node server action and the Edge middleware.

export const SESSION_COOKIE = "site_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET environment variable is not set");
  }
  return secret;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(
    value.length + ((4 - (value.length % 4)) % 4),
    "="
  );
  const binary = atob(padded);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

/** Creates a signed, expiring session token: base64url(payload).base64url(signature) */
export async function createSessionToken(): Promise<string> {
  const payload = JSON.stringify({ exp: Date.now() + SESSION_TTL_SECONDS * 1000 });
  const payloadB64 = base64UrlEncode(new TextEncoder().encode(payload));
  const key = await hmacKey(getSecret());
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64));
  const sigB64 = base64UrlEncode(new Uint8Array(signature));
  return `${payloadB64}.${sigB64}`;
}

/** Verifies a session token's signature and expiry. Returns true if valid. */
export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payloadB64, sigB64] = parts;

  try {
    const key = await hmacKey(getSecret());
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      base64UrlDecode(sigB64),
      new TextEncoder().encode(payloadB64)
    );
    if (!valid) return false;

    const payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(payloadB64))) as {
      exp: number;
    };
    return typeof payload.exp === "number" && Date.now() < payload.exp;
  } catch {
    return false;
  }
}

export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_SECONDS;
