// When this is built inside a GitHub Actions workflow for GitHub Pages,
// project pages (https://<user>.github.io/<repo>/) are served from a
// sub-path, but every asset in this app is referenced with a root-absolute
// path (e.g. "/assets/oi.svg", "/favicon.ico"). Without basePath/assetPrefix,
// those requests hit https://<user>.github.io/assets/oi.svg — one directory
// too high — and 404. This derives the sub-path automatically from the repo
// name at build time, and skips it for user/org root pages
// (a repo literally named "<user>.github.io"), which are served from the
// domain root and need no prefix.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  const isUserOrOrgPage = /\.github\.io$/i.test(repo);

  if (!isUserOrOrgPage) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath,
  assetPrefix,
};

export default nextConfig;
