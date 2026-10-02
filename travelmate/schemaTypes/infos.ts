import { defineField, defineType } from "sanity";

export const infoType = defineType({
  name: "info",
  title: "Info",
  type: "object",

  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Dansk", value: "da" },
          { title: "English", value: "en" },
          { title: "Español", value: "es" },
        ],
      },
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "language",
    },
  },
});