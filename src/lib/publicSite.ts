const envPublic = process.env.NEXT_PUBLIC_PUBLIC_SITE_URL?.replace(/\/$/, "");
const vercelPublic = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL.replace(/\/$/, "")}`
  : "";

export const PUBLIC_SITE_BASE_URL = envPublic || vercelPublic;

function normalizePath(path: string) {
  if (!path) return "/";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}

export function withPublicPath(path: string) {
  const normalizedPath = normalizePath(path);
  if (!PUBLIC_SITE_BASE_URL) return normalizedPath;
  if (typeof window !== "undefined") {
    const currentOrigin = window.location.origin.replace(/\/$/, "");
    if (currentOrigin === PUBLIC_SITE_BASE_URL.replace(/\/$/, "")) {
      return normalizedPath;
    }
  }
  if (normalizedPath.startsWith("http://") || normalizedPath.startsWith("https://")) {
    return normalizedPath;
  }
  return `${PUBLIC_SITE_BASE_URL}${normalizedPath}`;
}
