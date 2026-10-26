import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["/", "/work/tramitay"];

  return pages.flatMap((path) => {
    const ptUrl = `${site.url}${path}`;
    const enUrl = `${site.url}${path === "/" ? "/en" : `/en${path}`}`;
    return [
      {
        url: ptUrl,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.8,
        alternates: { languages: { pt: ptUrl, en: enUrl } },
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.8,
        alternates: { languages: { pt: ptUrl, en: enUrl } },
      },
    ];
  });
}
