import {format} from 'date-fns'

export default {
  name: 'addCreator',
  title: 'Add Creator',
  type: 'object',
  fields: [
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: [{type: 'creator'}]
    },
    {
      name: 'role',
      title: 'Role',
      description: 'what was your role?',
      type: 'reference',
      to: [{type: 'role'}]
    },
    ],
    preview: {
        select: {
            title: 'creator.name',
            subtitle: 'role.name' 
        },
    }
}
