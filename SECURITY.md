# Security Policy

## Supported Versions

We actively support and provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of EMAPOFPI seriously. If you discover a security vulnerability, we appreciate your help in disclosing it to us responsibly.

### Where to Report

**Email:** security@emapofpi.com

**PGP Key:** Available upon request for sensitive disclosures

### What to Include

Please provide the following information in your report:

1. **Description** - Clear description of the vulnerability
2. **Impact** - Potential impact and severity assessment
3. **Steps to Reproduce** - Detailed steps to reproduce the issue
4. **Proof of Concept** - Code or screenshots demonstrating the vulnerability
5. **Suggested Fix** - If you have ideas for how to fix it
6. **Your Contact Info** - So we can follow up with you

### Response Timeline

- **24 hours** - Acknowledgment of your report
- **3-5 days** - Initial assessment and severity classification
- **1-14 days** - Fix development (depending on severity)
- **Public disclosure** - Coordinated with you after fix deployment

### Severity Levels

- **CRITICAL** - Fixed within 24 hours
- **HIGH** - Fixed within 3-5 days
- **MEDIUM** - Fixed within 7-14 days
- **LOW** - Fixed in next release cycle

## Security Scope

### In Scope

- Pi SDK authentication and authorization
- Escrow system vulnerabilities
- API endpoint security
- Data protection and privacy issues
- XSS, CSRF, SQL injection
- Authentication bypass
- Privilege escalation
- Sensitive data exposure

### Out of Scope

- Social engineering attacks
- Physical access attacks
- DDoS attacks (without PoC)
- Issues in third-party dependencies (report to them)
- Outdated software without exploitability
- Issues requiring unlikely user interaction
- Theoretical vulnerabilities without practical exploitation

## Disclosure Policy

- **Please do not** disclose the vulnerability publicly until we've had a chance to address it
- We will work with you to understand and fix the issue
- We will credit you in our security advisories (unless you prefer to remain anonymous)
- We coordinate disclosure timing with you

## Bug Bounty Program

We offer rewards for valid security vulnerabilities:

- **CRITICAL** - Up to 1000π + Public recognition
- **HIGH** - Up to 500π + Public recognition
- **MEDIUM** - Up to 200π + Public recognition
- **LOW** - Public recognition in security hall of fame

Rewards are determined by our security team based on:
- Severity and impact
- Quality of report
- Novelty of finding

## Security Best Practices

For developers contributing to EMAPOFPI:

### Authentication

- Always use Pi SDK for authentication
- Implement petition-first access control
- Validate user roles and permissions
- Never trust client-side data

### Escrow Security

- Follow state machine strictly
- Validate all state transitions
- Maintain audit logs
- Implement multi-signature for high values

### Data Protection

- Encrypt sensitive data at rest and in transit
- Use parameterized queries
- Sanitize all user inputs
- Implement rate limiting

### API Security

- Validate all inputs
- Use proper HTTP methods
- Implement CORS correctly
- Return appropriate error codes (without leaking info)

## Audit & Transparency

- Regular third-party security audits
- Public audit logs for transparency
- Open-source components for review
- Quarterly security reports

## Contact

For security concerns: security@emapofpi.com

For general issues: support@emapofpi.com

GitHub: https://github.com/Elmahrosa/Elmahrosa-Map-of-PI

## Thank You

Thank you for helping keep EMAPOFPI and the Pi Network community safe!
