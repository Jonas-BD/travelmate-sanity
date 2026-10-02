import { defineField, defineType } from "sanity";

export const attractionType = defineType({
  name: "attraction",
  title: "Attraction",
  type: "document",

  fields: [
    defineField({
      name: "id",
      title: "ID",
      type: "number",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => {
          const infos = doc.infos as
            | { name?: string }[]
            | undefined;

          return infos?.[0]?.name || "";
        },
      },
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
      name: "latitude",
      title: "Latitude",
      type: "number",
    }),

    defineField({
      name: "longitude",
      title: "Longitude",
      type: "number",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
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
      title: "slug.current",
      media: "image",
    },
  },
});