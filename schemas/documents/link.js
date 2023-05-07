export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: R => R.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: R => R.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      validation: R => R.required(),
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      validation: R => R.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};
