# Frontend Pages Changelog

All notable changes to frontend pages will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**⚠️ CRITICAL - MANDATORY DEVELOPER TRACKING**:
Every changelog entry MUST track who made the change:
- **Developer entries**: `[Developer: Full Name]` - e.g., `[Developer: Josef Lindbom]`, `[Developer: Craig Martin]`, `[Developer: Jonne Waselius]`, `[Developer: Cory]`
- **Cursor/AI entries**: `[Cursor]` - e.g., `[Cursor]`
- **Format**: `- Description of change [Developer: Full Name]` or `- Description of change [Cursor]`
- **Purpose**: Accountability, tracking, audit trail, and responsibility assignment
- **NO EXCEPTIONS** - All entries must include developer/Cursor tracking
- **This is MANDATORY and STRICTLY ENFORCED**

## [1.0.0] - January 2026

### Fixed
- **APY Rate Corrections**: Fixed 3 APY rate discrepancies in Bot Lab [Developer: Josef Lindbom]
  - Arbitrage Bot Alpha: Changed from 12.5% to 11.5% APY (now within 10-12% documented range) [Developer: Josef Lindbom]
  - Liquidity Pool Beta: Changed from 8.3% to 13.0% APY (now within 12-15% documented range) [Developer: Josef Lindbom]
  - XRP Flash Loan Bot: Changed from 16.5% to 14.5% APY (now within 10-15% documented range) [Developer: Josef Lindbom]
  - XRP Flash Loan Bot Template: Changed from 16-22% to 14-18% APY range [Developer: Josef Lindbom]
  - Updated earnings calculations to reflect corrected APY rates [Developer: Josef Lindbom]

### Added
- **APY Rate Disclaimer**: Added prominent disclaimer to Bot Lab page [Developer: Josef Lindbom]
  - Warning about projected rates, market volatility, and inherent risks [Developer: Josef Lindbom]
  - Clarifies that rates are aggregated projected yields from optimized strategies [Developer: Josef Lindbom]
  - Yellow-bordered card with warning icon for visibility [Developer: Josef Lindbom]

## [Unreleased]

### Added
- Initial frontend pages changelog [Developer: Josef Lindbom]

---

## Notes

- **Location**: `frontend/src/pages/CHANGELOG.md`
- **Maintained By**: Development Team (Josef Lindbom - UI/UX Lead)
- **Update Frequency**: Every change to frontend pages must be logged here
