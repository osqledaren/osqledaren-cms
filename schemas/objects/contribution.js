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
      validation: R => R.required(),
    },
    {
      name: 'role',
      title: 'Role',
      description: 'What was your role?',
      type: 'reference',
      to: [{ type: 'role' }],
      validation: R => R.required(),
    },
  ],
  preview: {
    select: {
      title: 'creator.name',
      subtitle: 'role.name',
    },
  },
};
