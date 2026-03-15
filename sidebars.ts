// Sidebar navigation tree placeholder

module.exports = {
  docs: [
    'index',
    'quickstart',
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/overview',
        'concepts/workspaces',
        'concepts/agents',
        'concepts/accounts',
        'concepts/cards',
        'concepts/policies',
        'concepts/transactions',
        'concepts/approvals',
        'concepts/audit-logs',
      ],
    },
    // ...other categories
  ],
};