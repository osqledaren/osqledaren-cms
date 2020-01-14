
export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'creators',
      title: 'Creators',
      description: 'Add all contributors to this project',
      type: 'array',
      of: [{type: 'addCreator'}]

    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'

    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },

    {
      name: 'file',
      title: 'File',
      type: 'file',
      options: {accept: 'audio/*'}
    },
    {
      name: 'spotifyLink',
      title: 'Link to episode on Spotify',
      type: 'url',

    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
      media: 'image',
    },
  }
}
