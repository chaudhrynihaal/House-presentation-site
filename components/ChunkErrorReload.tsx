"use client";

import { useEffect } from "react";

const RELOAD_FLAG = "chunk-error-reload-attempted";

const CHUNK_ERROR_PATTERN =
  /loading chunk|chunkloaderror|failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/i;

/**
 * A page that stays open across a new deployment (or was loaded from a stale
 * cache right after one went out) can end up referencing JS chunk URLs the
 * server no longer has, causing an uncaught ChunkLoadError. Framer Motion
 * elements never get past their SSR "invisible" state when this happens,
 * while plain non-JS-dependent elements (e.g. the hero <video>) still show —
 * hence "only the video is visible" bug reports after a deploy. This
 * recovers automatically with a one-time hard reload instead of requiring
 * the user to know to clear their cache.
 */
export default function ChunkErrorReload() {
  useEffect(() => {
    function handleChunkError(message: string | undefined | null) {
      if (!message || !CHUNK_ERROR_PATTERN.test(message)) return;
      if (sessionStorage.getItem(RELOAD_FLAG)) return; // avoid a reload loop
      sessionStorage.setItem(RELOAD_FLAG, "1");
      window.location.reload();
    }

    function onError(event: ErrorEvent) {
      handleChunkError(event.message);
    }
    function onRejection(event: PromiseRejectionEvent) {
      const reason = event.reason;
      handleChunkError(typeof reason === "string" ? reason : reason?.message);
    }

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
