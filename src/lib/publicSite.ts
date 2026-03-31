export const PUBLIC_SITE_BASE_URL = process.env.NEXT_PUBLIC_PUBLIC_SITE_URL || "";

export function withPublicPath(path: string) {
  if (!PUBLIC_SITE_BASE_URL) return path;
  if (!path.startsWith("/")) {
    return `${PUBLIC_SITE_BASE_URL}/${path}`;
  }
  return `${PUBLIC_SITE_BASE_URL}${path}`;
}
