export default {
  name: 'contribution',
  title: 'Contribution',
  type: 'object',
  fields: [
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: [{ type: 'creator' }],
    },
    {
      name: 'role',
      title: 'Role',
      description: 'What was your role?',
      type: 'reference',
      to: [{ type: 'role' }],
    },
  ],
  preview: {
    select: {
      title: 'creator.name',
      subtitle: 'role.name',
    },
  },
};
