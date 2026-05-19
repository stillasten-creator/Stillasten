import { defineField, defineType } from "sanity";

export const stoneModel = defineType({
  name: "stoneModel",
  title: "Gravstensmodell",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Namn",
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
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Stående", value: "staende" },
          { title: "Liggande", value: "liggande" },
          { title: "Urngrav", value: "urngrav" }
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "priceFrom",
      title: "Startpris",
      type: "string"
    }),
    defineField({
      name: "dimensions",
      title: "Mått",
      type: "string"
    }),
    defineField({
      name: "intro",
      title: "Kort intro",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Beskrivning",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "mainImage",
      title: "Huvudbild",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt-text",
          type: "string",
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: "materials",
      title: "Stensorter",
      type: "array",
      of: [{ type: "reference", to: [{ type: "material" }] }]
    }),
    defineField({
      name: "included",
      title: "Vad som ingår",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "recommendedFor",
      title: "Passar för",
      type: "array",
      of: [{ type: "string" }]
    })
  ]
});
