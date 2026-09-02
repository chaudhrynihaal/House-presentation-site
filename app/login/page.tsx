import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Private Presentation — Sign In",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-charcoal px-6">
      <p className="eyebrow text-gold mb-4">Private Presentation</p>
      <h1 className="font-display text-3xl md:text-4xl text-offwhite mb-10 text-center">
        Lote 25
      </h1>
      <LoginForm next={next && next.startsWith("/") ? next : "/"} />
    </main>
  );
}
