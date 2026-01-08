# Erlang/Elixir Ledger Service Rules
## Critical Rules for Blockchain Ledger Service

**Last Updated**: January 2026  
**Version**: 1.0  
**Status**: CRITICAL - Service Rules (Planned)

**Service Owner**: TBD  
**Contact**: TBD

---

## ⚠️ CRITICAL RULES - STRICTLY ENFORCED

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

### Documentation Requirements
- **All ledger docs** in `docs/Services/erlang-ledger/`
- **Architecture documentation** required
- **API documentation** required

---

## 📋 Service-Specific Checklist

Before deploying ledger changes:
- [ ] Source code is in `backend/erlang-ledger/lib/`
- [ ] Tests are passing
- [ ] Hash chain verification is working
- [ ] Transaction recording is functional
- [ ] Documentation is updated in `docs/Services/erlang-ledger/`

---

## 🔗 Related Documentation

- **Setup Guide**: `docs/Services/erlang-ledger/` (to be created)
- **Architecture Documentation**: `docs/Services/erlang-ledger/` (to be created)

---

**These rules are CRITICAL and must be followed for all Erlang/Elixir ledger service work.**

