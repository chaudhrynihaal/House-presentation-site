"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="w-full max-w-sm">
      <input type="hidden" name="next" value={next} />
      <label htmlFor="password" className="eyebrow block text-gold mb-3">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoFocus
        required
        autoComplete="current-password"
        className="w-full bg-transparent border-b border-offwhite/30 py-3 text-offwhite text-lg tracking-wide outline-none focus:border-gold transition-colors"
        placeholder="••••••••"
      />
      {state.error ? (
        <p className="mt-4 text-sm text-red-300/90" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full border border-gold text-gold py-3 eyebrow hover:bg-gold hover:text-charcoal transition-colors disabled:opacity-50"
      >
        {pending ? "Verifying…" : "Enter"}
      </button>
    </form>
  );
}
