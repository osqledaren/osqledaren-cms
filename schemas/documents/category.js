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
  ],
};
