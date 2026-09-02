"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MIN_SCALE = 0.6;
const MAX_SCALE = 2.4;

export default function PdfSitePlanViewer({ pdfUrl }: { pdfUrl: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  return (
    <div className="border border-offwhite/10">
      <div className="flex items-center justify-between gap-4 border-b border-offwhite/10 px-4 py-3 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(MIN_SCALE, s - 0.2))}
            aria-label="Zoom out"
            className="h-8 w-8 border border-offwhite/20 text-offwhite hover:border-gold hover:text-gold transition-colors"
          >
            −
          </button>
          <span className="text-sm text-offwhite/60 w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(MAX_SCALE, s + 0.2))}
            aria-label="Zoom in"
            className="h-8 w-8 border border-offwhite/20 text-offwhite hover:border-gold hover:text-gold transition-colors"
          >
            +
          </button>
        </div>
        <a
          href={pdfUrl}
          download
          className="eyebrow text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-charcoal transition-colors"
        >
          Download PDF
        </a>
      </div>

      <div className="flex flex-col md:flex-row">
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<div className="p-10 text-center text-offwhite/50">Loading document…</div>}
          error={
            <div className="p-10 text-center text-offwhite/50">Unable to load document.</div>
          }
          className="flex md:flex-row flex-col-reverse w-full"
        >
          <div className="flex md:flex-col gap-3 p-4 overflow-x-auto md:overflow-y-auto md:max-h-[70vh] md:w-32 shrink-0 border-t md:border-t-0 md:border-r border-offwhite/10">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setPageNumber(page)}
                aria-label={`Go to page ${page}`}
                aria-current={pageNumber === page}
                className={`shrink-0 border-2 transition-colors ${
                  pageNumber === page ? "border-gold" : "border-transparent hover:border-offwhite/30"
                }`}
              >
                <Page
                  pageNumber={page}
                  width={96}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-auto p-6 flex justify-center bg-charcoal-light">
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        </Document>
      </div>
    </div>
  );
}
