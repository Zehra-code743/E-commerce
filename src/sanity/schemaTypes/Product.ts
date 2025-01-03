export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Name of the product',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the product in USD',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'Main image of the product',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description of the product',
      },
    ],
  };
  