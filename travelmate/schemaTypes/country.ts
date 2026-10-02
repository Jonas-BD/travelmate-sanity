import { defineField, defineType } from "sanity";

export const countryType = defineType({
  name: "country",
  title: "Country",
  type: "document",

  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),

    defineField({
      name: "code",
      title: "Country Code",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "infos",
      title: "Translations",
      type: "array",
      of: [{ type: "info" }],
    }),
  ],

  preview: {
    select: {
      title: "code",
      media: "image",
    },
  },
});