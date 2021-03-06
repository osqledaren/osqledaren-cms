export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: R => R.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: R => R.required(),
    },
    {
      name: 'menu',
      title: 'Show in menu',
      type: 'boolean',
      validation: R => R.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: R => R.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: R => R.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: R => R.required(),
      options: {
        source: doc => doc.title,
      },
    },
  ],
};
