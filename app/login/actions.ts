"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE_SECONDS } from "@/lib/auth";

export type LoginState = { error?: string };

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password");
  const next = formData.get("next");
  const nextPath = typeof next === "string" && next.startsWith("/") ? next : "/";

  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) {
    return { error: "Site is not configured. Missing SITE_PASSWORD." };
  }

  if (typeof password !== "string" || password !== sitePassword) {
    return { error: "Incorrect password." };
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  redirect(nextPath);
}
