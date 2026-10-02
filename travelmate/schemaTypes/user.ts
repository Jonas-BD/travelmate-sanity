import { defineField, defineType } from "sanity";

export const userType = defineType({
    name: "user",
    title: "User",
    type: "document",

    fields: [
        defineField({
            name: "name",
            type: "string",
        }),

        defineField({
            name: "email",
            type: "email",
        }),

        defineField({
            name: "avatar",
            type: "image",
        }),

        defineField({
            name: "bio",
            type: "text",
        })
    ]
})