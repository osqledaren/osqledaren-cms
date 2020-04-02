export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: R => R.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: R => R.required(),
    },
    {
      name: 'creators',
      title: 'Creators',
      description: 'Add all contributors to this project',
      type: 'array',
      of: [{ type: 'contribution' }],
      validation: R => R.required(),
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'date',
      validation: R => R.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: R => R.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: R => R.required(),
      options: {
        source: doc => doc.title + '-' + doc.publishDate,
      },
    },
    {
      name: 'ingress',
      title: 'Ingress',
      type: 'text',
      validation: R => R.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
      validation: R => R.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'mainImage',
    },
  },
};
