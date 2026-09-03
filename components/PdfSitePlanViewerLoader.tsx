"use client";

import dynamic from "next/dynamic";

// react-pdf's underlying pdfjs-dist package references browser-only globals
// (DOMMatrix) at module top level, which crashes Next.js's server-side
// prerendering of client components. Loading it with ssr:false keeps it out
// of the server bundle entirely. `ssr: false` on next/dynamic is only valid
// inside a Client Component, hence this thin wrapper around the real viewer.
const PdfSitePlanViewer = dynamic(() => import("./PdfSitePlanViewer"), {
  ssr: false,
  loading: () => (
    <div className="border border-offwhite/10 p-10 text-center text-offwhite/50">
      Loading document viewer…
    </div>
  ),
});

export default PdfSitePlanViewer;
