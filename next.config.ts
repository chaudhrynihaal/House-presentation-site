import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Source photography is pre-compressed/pre-sized by the media pipeline
    // (see README). Disabling the built-in optimizer means next/image issues
    // a normal same-origin <img> request that carries the session cookie, so
    // /media stays behind the password gate — the optimizer's internal
    // request re-dispatch does not forward cookies and would otherwise be
    // bounced to /login by middleware.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
