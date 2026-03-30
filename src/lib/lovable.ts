export const LOVABLE_BASE_URL = process.env.NEXT_PUBLIC_LOVABLE_URL || "";

export function withLovablePath(path: string) {
  if (!LOVABLE_BASE_URL) return path;
  if (!path.startsWith("/")) {
    return `${LOVABLE_BASE_URL}/${path}`;
  }
  return `${LOVABLE_BASE_URL}${path}`;
}
