import { defineField, defineType } from "sanity";

export const cityType = defineType({
  name: "city",
  title: "City",
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
      name: "country",
      title: "Country",
      type: "reference",
      to: [{ type: "country" }],
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