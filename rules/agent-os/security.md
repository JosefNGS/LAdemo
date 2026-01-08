# Agent OS Security Rules

**Source**: `instructions/.agent-os/standards/security-rules/core-principles.md`

## Core Security Principles

These rules apply **universally** to all code generation and development tasks.

### 1. Do Not Use Raw User Input in Sensitive Operations
- **Untrusted input** must never be used directly in:
  - File access
  - Command execution
  - Database queries
  - Similar sensitive operations
- **Always validate, sanitize, and properly escape** user input before use

### 2. Do Not Expose Secrets in Public Code
- **Secrets** such as API keys, credentials, private keys, or tokens must **NOT** appear in:
  - Frontend code
  - Public repositories
  - Client-distributed files
- Use **environment variables** or **secure secret management services**

### 3. Enforce Secure Communication Protocols
- Only **secure protocols** (HTTPS, TLS) must be used for all external communications
- **Never downgrade** to unencrypted protocols for convenience

### 4. Avoid Executing Dynamic Code
- **Dynamically constructed code** or expressions must NOT be executed at runtime
- This includes:
  - `eval()`
  - `exec()`
  - `Function()` constructors
  - Similar mechanisms

### 5. Validate All External Input
- Inputs from **users, external APIs, or third-party systems** must be validated before use
- Implement **allowlist validation** where possible (accept only known good values)

### 6. Do Not Log Sensitive Information
- Logs must **NOT** contain:
  - Credentials
  - Tokens
  - Personal identifiers
  - Other sensitive data
- Implement **log sanitization** for any user-provided data

### 7. Prevent Disabling of Security Controls
- Security checks must **NOT** be disabled, bypassed, or suppressed without:
  - Documented justification
  - Reviewed justification
- **Never add code comments** like "disable security check" or "skip validation"

### 8. Limit Trust in Client-Side Logic
- **Critical logic** related to:
  - Permissions
  - Authentication
  - Validation
- Must **NOT** rely solely on client-side code
- **Always validate on the server side**, even if client validation exists

### 9. Detect and Eliminate Hardcoded Credentials
- Credentials must **NOT** be hardcoded in:
  - Source files
  - Configuration
  - Scripts
- This includes **development/test credentials** - use proper configuration management

## Additional Security Considerations

### SQL Injection Prevention
- Use **parameterized queries** or **prepared statements**
- Never concatenate user input into SQL queries

### Cross-Site Scripting (XSS) Prevention
- Sanitize all user input before rendering
- Use framework-provided escaping mechanisms
- Validate and sanitize HTML content

### Authentication & Authorization
- Implement proper authentication mechanisms
- Use secure session management
- Enforce authorization checks on all protected resources

## CRITICAL Rules

- ✅ **Always validate and sanitize** user input
- ✅ **Use environment variables** for secrets
- ✅ **Use HTTPS/TLS** for all communications
- ✅ **Validate on server side** - never trust client-side only
- ✅ **Use parameterized queries** for database operations
- ✅ **Sanitize logs** - never log sensitive information
- ❌ **Never use raw user input** in sensitive operations
- ❌ **Never expose secrets** in code or repositories
- ❌ **Never execute dynamic code** (eval, exec, etc.)
- ❌ **Never disable security controls** without documented justification
- ❌ **Never hardcode credentials** anywhere
