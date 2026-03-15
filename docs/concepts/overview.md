# Olympay Documentation Structure

This documentation is organized to help users, developers, and integrators understand and use Olympay efficiently. Below is a detailed structure with valid content for each section:

## Getting Started
- **Introduction:** Overview of Olympay and its purpose.
- **Quickstart:** Step-by-step guide to get started in 5 minutes.

## Concepts
- **Overview:** Olympay architecture, main components, and workflow.
- **Workspaces:** Multi-tenancy, workspace management, and isolation.
- **Agents:** Definition, lifecycle, and management of agents.
- **Accounts:** Agent accounts, balances, and supported currencies.
- **Cards:** Virtual card issuance and management.
- **Policies:** Policy engine, rule types, and enforcement.
- **Transactions:** Transaction evaluation flow and decision process.
- **Approvals:** Human-in-the-loop approval workflow.
- **Audit Logs:** Audit trail for compliance and reporting.

## Authentication
- **Overview:** Authentication model (Privy JWT vs API key).
- **Dashboard Login:** Privy email login for dashboard users.
- **API Keys:** Workspace API keys (olympay_ws_xxx).

## API Reference
- **Overview:** Base URL, headers, error format, and authentication.
- **Agents:** Endpoints for agent management.
- **Accounts:** Endpoints for account management.
- **Cards:** Endpoints for card management.
- **Policies:** Endpoints for policy management.
- **Transactions:** Endpoints for transaction evaluation.
- **Approvals:** Endpoints for approval workflow.
- **Workspace:** Endpoints for workspace key management.
- **Audit Logs:** Endpoints for audit log access.

## CLI Reference
- **Overview:** Installation, configuration, and usage of Olympay CLI.
- **Auth:** CLI commands for login, logout, and whoami.
- **Agents:** CLI commands for agent create/list/suspend/activate.
- **Accounts:** CLI commands for account create/list.
- **Cards:** CLI commands for card issue/list.
- **Policies:** CLI commands for policy create/list/assign.
- **Transactions:** CLI command for transaction evaluation.
- **Workspace:** CLI commands for workspace key management.

## Policy Types
- **Spend Limit:** Set spending limits for agents.
- **Merchant Allowlist:** Allow transactions only for specific merchants.
- **Merchant Blocklist:** Block transactions for specific merchants.
- **Approval Required:** Require human approval for certain transactions.
- **Time Window:** Restrict transactions to specific time windows.

## Guides
- **Spawn Your First Agent:** End-to-end guide to create agent, account, card, and policy.
- **Set Spend Controls:** Attach spend limit and blocklist to an agent.
- **Handle Approvals:** Build a human-approval loop.
- **Audit and Compliance:** Use audit logs for compliance reporting.
- **Multi-Agent Workspace:** Manage multiple agents in one workspace.

## Reference
- **API Errors:** Common error codes and troubleshooting.
- **Policy Evaluation:** How the policy engine resolves decisions.
- **Decision Types:** ALLOW / DENY / REVIEW explained.
- **Limits:** Rate limits, account limits, card limits.

## Additional
- **CLI config file:** `~/.olympay/config.json`
- **Install CLI:** `npm install -g olympay`
- **Brand CSS:** Custom theme in `src/css/custom.css` (cream + gold).
- **Images:** Diagrams and screenshots in `static/img/`.

# Overview

Learn how Olympay works, including its architecture and main components.

## Endpoint Name

`METHOD /v1/path`

Brief description of what this endpoint does.

### Request

| Field | Type   | Required | Description |
|-------|--------|----------|-------------|
| field | string | yes      | ...         |

### Response

| Field | Type   | Description |
|-------|--------|-------------|
| field | string | ...         |

### Example

```bash
curl -X POST https://api.olympay.tech/v1/path \
  -H "Authorization: Bearer olymppay_ws_xxx" \
  -H "Content-Type: application/json" \
  -d '{ "field": "value" }'
```

```json
{
  "id": "...",
  "field": "value"
}
```

## Command Name
Brief description.

### Usage
```bash
olympay <command> [flags]
```

### Flags
| Flag   | Type   | Required | Description |
|--------|--------|----------|-------------|
| --flag | string | yes      | ...         |

### Example
```bash
olympay agent create --name "payments-bot"
```

## Common HTTP Status Codes

| Code | Meaning                        |
|------|--------------------------------|
| 400  | Bad request / validation error |
| 401  | Missing or invalid auth token  |
| 403  | Forbidden (wrong workspace)    |
| 404  | Resource not found             |
| 409  | Conflict (e.g. duplicate)      |
| 500  | Internal server error          |

## Full CLI Command List

- olympay login
- olympay logout
- olympay whoami
- olympay agent create --name <name>
- olympay agent list
- olympay agent suspend <id>
- olympay agent activate <id>
- olympay account create --agent <id> --currency <USD>
- olympay account list
- olympay card issue --account <id>
- olympay card list
- olympay policy create --type <TYPE> --name <name> [--amount <n> --currency <USD> --period <monthly|weekly|daily>]
- olympay policy list
- olympay policy assign --policy <id> --agent <id>
- olympay tx eval --agent <id> --amount <n> --currency <USD> --merchant <name>
- olympay workspace generate-key
- olympay workspace keys
- olympay workspace revoke <keyId>

**CLI config file:** `~/.olympay/config.json`
**Install:** `npm install -g olympay`

## Docusaurus Sidebar Structure

The sidebar in sidebars.ts should include:

- Getting Started
    - Introduction
    - Quickstart
- Concepts
    - Overview, Workspaces, Agents, Accounts, Cards, Policies, Transactions, Approvals, Audit Logs
- Authentication
    - Overview, Dashboard Login, API Keys
- API Reference
    - Overview, Agents, Accounts, Cards, Policies, Transactions, Approvals, Workspace, Audit Logs
- CLI Reference
    - Overview, Auth, Agents, Accounts, Cards, Policies, Transactions, Workspace
- Policy Types
    - Spend Limit, Merchant Allowlist, Merchant Blocklist, Approval Required, Time Window
- Guides
    - Spawn Your First Agent, Set Spend Controls, Handle Approvals, Audit and Compliance, Multi-Agent Workspace
- Reference
    - API Errors, Policy Evaluation, Decision Types, Limits