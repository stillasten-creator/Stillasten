import { defineField, defineType } from "sanity";

export const guide = defineType({
  name: "guide",
  title: "Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Rubrik",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Ingress",
      type: "text",
      rows: 2
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string"
    }),
    defineField({
      name: "mainImage",
      title: "Huvudbild",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-text", type: "string" }]
    }),
    defineField({
      name: "body",
      title: "Innehåll",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt-text", type: "string" }]
        }
      ]
    }),
    defineField({
      name: "seoTitle",
      title: "SEO-titel",
      type: "string"
    }),
    defineField({
      name: "seoDescription",
      title: "Metabeskrivning",
      type: "text",
      rows: 2
    })
  ]
});
