import {format} from 'date-fns'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
  	{
  		name: 'mainImage',
  		title: "Main image",
  		type: 'image'
  	},
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'creators',
      title: 'Creators',
      description: 'Add all contributors to this project',
      type: 'array',
      of: [{type: 'addCreator'}]

    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
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
      subtitle: 'publishedAt',
      media: 'mainImage',
    },
  }
 }
