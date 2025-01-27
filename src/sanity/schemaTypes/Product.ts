import { defineType, defineField } from "sanity";

export const Product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
  
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the product',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product in USD',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Main image of the product',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the product',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for the product',
      options: {
        source: 'name',
      },
    }),
  ],
});