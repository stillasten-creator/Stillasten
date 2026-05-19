import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Sajtinställningar",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string"
    }),
    defineField({
      name: "email",
      title: "E-post",
      type: "string"
    }),
    defineField({
      name: "responseTime",
      title: "Svarstid",
      type: "string"
    }),
    defineField({
      name: "organizationNumber",
      title: "Organisationsnummer",
      type: "string"
    }),
    defineField({
      name: "address",
      title: "Adress / showroom",
      type: "text",
      rows: 3
    })
  ]
});
