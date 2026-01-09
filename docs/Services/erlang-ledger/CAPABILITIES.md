# Erlang/Elixir Ledger Service Capabilities

**Last Updated**: January 2026  
**Status**: Planned Blockchain Ledger Service

## Overview
Erlang/Elixir Ledger is a **custom blockchain transparency ledger** for BitNexus. It records affiliate transactions and provides immutable transaction history.

## What Erlang Ledger Can Manage
- **Blockchain Ledger**:
  - Transaction recording
  - Block creation and validation
  - Hash chain verification
  - Consensus mechanism (RAFT or custom)
- **Transaction History**:
  - Immutable transaction records
  - Transaction verification
  - Transaction queries
  - Historical data access
- **BEAM VM Processes**:
  - GenServers for ledger state
  - Process supervision for fault tolerance
  - Distributed ledger (multi-node)

## What Erlang Ledger Should NOT Manage
- ❌ User authentication (owned by **Phoenix/Elixir auth**)
- ❌ Business logic (owned by **Elixir services**)
- ❌ Database storage (uses **Mnesia** or **PostgreSQL** for persistence)
- ❌ UI/frontend (owned by **React/Phoenix LiveView**)

## Integrations
- **Elixir Services**: Direct GenServer calls (shared BEAM VM)
- **Phoenix**: API endpoints for transaction queries
- **PostgreSQL**: Optional persistence layer
- **Mnesia**: Built-in distributed database

## Typical Use Cases
- Recording affiliate commission transactions
- Providing transparent transaction history
- Verifying transaction integrity
- Supporting marketplace transparency features
