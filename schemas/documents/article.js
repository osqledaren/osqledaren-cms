export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'creators',
      title: 'Creators',
      description: 'Add all contributors to this project',
      type: 'array',
      of: [{ type: 'contribution' }],
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'date',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
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
