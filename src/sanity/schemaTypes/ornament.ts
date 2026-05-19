import { defineField, defineType } from "sanity";

export const ornament = defineType({
  name: "ornament",
  title: "Tillbehör och ornament",
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
          { title: "Ornament", value: "ornament" },
          { title: "Lykta", value: "lykta" },
          { title: "Vas", value: "vas" },
          { title: "Övrigt", value: "ovrigt" }
        ]
      }
    }),
    defineField({
      name: "priceRange",
      title: "Prisintervall",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Beskrivning",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-text", type: "string" }]
    })
  ]
});
