/**
 * Spanish section wrapper. The root layout owns <html>/<body>; this nested
 * layout scopes the language for assistive tech and keeps the Spanish
 * pages grouped under /es for hreflang + sitemap purposes.
 */
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>
}
