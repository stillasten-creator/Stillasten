import type { MetadataRoute } from "next";

import { categories, guides, materials, stoneModels } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = [
    "",
    "/gravstenar",
    "/tillbehor",
    "/ornament",
    "/sa-fungerar-det",
    "/guider",
    "/faq",
    "/om-stillasten",
    "/kontakta-oss",
    "/offert",
    "/integritetspolicy",
    "/cookiepolicy",
    ...categories.map((category) => `/gravstenar/${category.slug}`),
    ...stoneModels.map((model) => `/gravstenar/${model.slug}`),
    ...materials.map((material) => `/stensorter/${material.slug}`),
    ...guides.map((guide) => `/guider/${guide.slug}`)
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
