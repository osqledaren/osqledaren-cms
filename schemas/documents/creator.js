import {format} from 'date-fns'

export default {
  name: 'creator',
  title: 'Creator',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image'
    },
  ],
}
