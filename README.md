# Olympay Documentation Repository

This repository contains the official documentation for Olympay, a financial control platform for autonomous AI agents. The documentation covers the REST API, CLI, SDK, policy engine, approval workflows, and integration guides.

- **Live site:** https://docs.olympay.tech
- **Main platform:** https://olympay.tech
- **API base:** https://api.olympay.tech/v1

## Repository Structure

```
olympay-docs/
├── docs/
│   ├── index.md                          # Introduction / landing page
│   ├── quickstart.md                     # 5-minute getting started guide
│   │
│   ├── concepts/
│   │   ├── overview.md                   # How Olympay works (architecture)
│   │   ├── workspaces.md                 # Workspaces and multi-tenancy
│   │   ├── agents.md                     # What an agent is, lifecycle
│   │   ├── accounts.md                   # Agent accounts and balances
│   │   ├── cards.md                      # Virtual cards
│   │   ├── policies.md                   # Policy engine and rule types
│   │   ├── transactions.md               # Transaction evaluation flow
│   │   ├── approvals.md                  # Human-in-the-loop approval workflow
│   │   └── audit-logs.md                 # Audit trail
│   │
│   ├── auth/
│   │   ├── overview.md                   # Auth model (Privy JWT vs API key)
│   │   ├── dashboard-login.md            # Privy email login for dashboard users
│   │   └── api-keys.md                   # Workspace API keys (olympay_ws_xxx)
│   │
│   ├── api/
│   │   ├── overview.md                   # Base URL, headers, error format
│   │   ├── agents.md                     # /agents endpoints
│   │   ├── accounts.md                   # /accounts endpoints
│   │   ├── cards.md                      # /cards endpoints
│   │   ├── policies.md                   # /policies endpoints
│   │   ├── transactions.md               # /transactions/attempt endpoint
│   │   ├── approvals.md                  # /approvals endpoints
│   │   ├── workspace.md                  # /workspace/keys endpoints
│   │   └── audit-logs.md                 # /audit-logs endpoint
│   │
│   ├── cli/
│   │   ├── overview.md                   # Installation and config
│   │   ├── auth.md                       # login, logout, whoami
│   │   ├── agents.md                     # agent create/list/suspend/activate
│   │   ├── accounts.md                   # account create/list
│   │   ├── cards.md                      # card issue/list
│   │   ├── policies.md                   # policy create/list/assign
│   │   ├── transactions.md               # tx eval
│   │   └── workspace.md                  # workspace generate-key/keys/revoke
│   │
│   ├── policies/
│   │   ├── spend-limit.md
│   │   ├── merchant-allowlist.md
│   │   ├── merchant-blocklist.md
│   │   ├── approval-required.md
│   │   └── time-window.md
│   │
│   ├── guides/
│   │   ├── spawn-first-agent.md          # End-to-end: create agent, account, card, policy
│   │   ├── set-spend-controls.md         # Attach spend limit + blocklist to an agent
│   │   ├── handle-approvals.md           # Build a human-approval loop
│   │   ├── audit-and-compliance.md       # Using audit logs for compliance reporting
│   │   └── multi-agent-workspace.md      # Managing many agents in one workspace
│   │
│   └── reference/
│       ├── api-errors.md                 # Error codes and troubleshooting
│       ├── policy-evaluation.md          # How the policy engine resolves decisions
│       ├── decision-types.md             # ALLOW / DENY / REVIEW explained
│       └── limits.md                     # Rate limits, account limits, card limits
│
├── static/
│   └── img/                              # Diagrams, screenshots
│
├── src/
│   └── css/
│       └── custom.css                    # Brand overrides (cream + gold theme)
│
├── docusaurus.config.ts                  # Site config
├── sidebars.ts                           # Sidebar navigation tree
└── package.json                          # Project manifest
```

## Getting Started

See `docs/quickstart.md` for a 5-minute guide to using Olympay.

## Contribution

Please open issues or pull requests for improvements, corrections, or new guides.

## License

See LICENSE for details.
