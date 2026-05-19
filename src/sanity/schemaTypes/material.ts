import { defineField, defineType } from "sanity";

export const material = defineType({
  name: "material",
  title: "Stensort",
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
      name: "tone",
      title: "Ton och uttryck",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Beskrivning",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "maintenance",
      title: "Skötsel",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "priceLevel",
      title: "Prisnivå",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Materialbild",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt-text", type: "string" }]
    })
  ]
});
