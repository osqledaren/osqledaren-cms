export default {
    name: 'podcast_id',
    type: 'document',
    title: 'Podcast Episode',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Episode Name',
        validation: R => R.required(),
      },
      {
        name: 'id',
        type: 'string',
        title: 'Spotify ID',
        validation: R => R.required(),
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
    ],
};
