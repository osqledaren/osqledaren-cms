export default {
  name: 'creator',
  title: 'Creator',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: R => R.required(),
    },
    {
      name: 'mail',
      title: 'E-mail',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    },
  ],
};
