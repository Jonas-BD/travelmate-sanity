import { defineArrayMember, defineField, defineType } from "sanity";

export const article = defineType({
    name: "article",
    title: "Article",
    type: "document",

    fields: [
        defineField({
            name: "title",
            type: "string",
        }),

        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            }
        }),

        defineField({
            name: "teaser",
            type: "text",
        }),

        defineField({
            name: "content",
            type: "array",
            of: [
                defineArrayMember({
                    type: "block",
                }),
            ],
        }),

        defineField({
            name: "image",
            type: "image",
        }),

        defineField({
            name: "publishedAt",
            type: "datetime",
        }),

        defineField({
            name: "author",
            type: "reference",
            to: [{ type: "user" }],
        })
    ]
})