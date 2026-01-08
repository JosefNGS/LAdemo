# Erlang/Elixir Ledger Service Rules

**⚠️ PRIMARY GUIDE**: Always refer to `instructions/.agent-os/` and `instructions/BMAD-METHOD/` for complete framework documentation and guidelines.

**Source**: `docs/Services/erlang-ledger/SERVICE_RULES.md`

**Complete Framework Documentation**:
- **Agent OS**: `instructions/.agent-os/` - Security rules, blockchain security, code standards
- **BMAD-METHOD**: `instructions/BMAD-METHOD/` - Architecture workflow guidelines

**Framework References**:
- `instructions/.agent-os/standards/security-rules/` - Complete security guidelines
- `instructions/.agent-os/standards/code-style.md` - Code standards
- `instructions/BMAD-METHOD/docs/explanation/architecture/` - Architecture guidelines
- `instructions/BMAD-METHOD/docs/how-to/workflows/` - Development workflow guidelines

## Critical Rules

### Service Location
- **All Erlang/Elixir ledger files MUST be in**: `backend/erlang-ledger/`
- **Source code**: `backend/erlang-ledger/lib/`
- **One folder per service** - No mixing with other services

### File Organization
- **Source code**: `backend/erlang-ledger/lib/`
- **Tests**: `backend/erlang-ledger/test/`
- **Configuration**: `backend/erlang-ledger/config/`
- **Documentation**: `docs/Services/erlang-ledger/`

### Code Standards
- **Erlang/Elixir** for blockchain ledger
- **BEAM VM** advantages (concurrency, distribution, fault tolerance)
- **Test chain/ledger** implementation (~200 lines)
- **Block structure** and hash chain verification

### Blockchain Rules
- **Block structure**: Transactions, hash, previous hash, timestamp, nonce
- **Hash chain verification** required
- **Consensus mechanism** (RAFT or custom)
- **Transaction recording** for affiliate commissions

## CRITICAL Rules

- ✅ **Source code in `backend/erlang-ledger/lib/`** - Correct location
- ✅ **Hash chain verification** - Required and must work
- ✅ **Block structure** - Must follow defined structure
- ✅ **Tests passing** - All tests must pass
- ✅ **Consensus mechanism** - Must be implemented
- ❌ **Never skip hash verification** - It's critical for security
- ❌ **Never skip tests** - All tests must pass
