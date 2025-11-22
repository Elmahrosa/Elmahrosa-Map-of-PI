# Contributing to EMAPOFPI

Thank you for your interest in contributing to EMAPOFPI, the official seller onboarding platform for Pi Network in Egypt, MENA, and Africa!

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Standards](#code-standards)
- [Testing Requirements](#testing-requirements)
- [Documentation](#documentation)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. We pledge to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior

- Harassment, trolling, or discriminatory comments
- Publishing others' private information
- Professional misconduct or abuse of authority
- Any conduct that could reasonably be considered inappropriate

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Pi Browser (for testing Pi SDK integration)
- Basic understanding of Next.js, TypeScript, and React

### Local Setup

1. **Fork and clone the repository:**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/Elmahrosa-Map-of-PI.git
   cd Elmahrosa-Map-of-PI
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser:**
   Navigate to `http://localhost:3000`

5. **Test in Pi Browser:**
   Open your deployment URL in Pi Browser to test Pi SDK features

## Development Workflow

1. **Create an issue** describing the feature or bug
2. **Fork the repository** if you haven't already
3. **Create a feature branch** from `main`
4. **Make your changes** following our code standards
5. **Write/update tests** for your changes
6. **Update documentation** as needed
7. **Submit a pull request** with a clear description

## Branching Strategy

We use a simple branching model:

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/trust-score-display`)
- `fix/` - Bug fixes (e.g., `fix/escrow-state-transition`)
- `docs/` - Documentation updates (e.g., `docs/api-endpoints`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)
- `refactor/` - Code refactoring (e.g., `refactor/auth-module`)

### Examples

\`\`\`bash
git checkout -b feature/seller-dashboard
git checkout -b fix/arabic-rtl-layout
git checkout -b docs/escrow-api-guide
\`\`\`

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `perf`: Performance improvements
- `ci`: CI/CD pipeline changes

### Examples

\`\`\`
feat(escrow): add dispute resolution workflow

Implement multi-step dispute resolution with admin review.
Includes UI for dispute submission and status tracking.

Closes #42
\`\`\`

\`\`\`
fix(i18n): correct Arabic RTL text alignment

Fixed text direction for Arabic language in seller cards
and navigation menu.

Fixes #38
\`\`\`

\`\`\`
docs(api): add escrow endpoint documentation

Added complete API documentation for escrow endpoints
including request/response examples.
\`\`\`

## Pull Request Process

### Before Submitting

- [ ] Code follows our style guidelines
- [ ] All tests pass (`npm test`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventions
- [ ] Branch is up to date with `main`

### PR Description Template

\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Closes #(issue number)

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
\`\`\`

### Review Process

1. **Automated checks** must pass (CI/CD)
2. **Code review** by at least one maintainer
3. **Testing** in Pi Browser (for Pi SDK features)
4. **Approval** from maintainer
5. **Merge** to main branch

### Review Timeline

- Bug fixes: 1-2 days
- Features: 3-5 days
- Major changes: 5-7 days

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type - use `unknown` if necessary
- Use strict mode

### React/Next.js

- Use functional components with hooks
- Prefer server components where possible
- Use client components only when necessary (`"use client"`)
- Follow Next.js App Router conventions

### Code Style

- Use Prettier for formatting (already configured)
- Follow ESLint rules (already configured)
- Use meaningful variable and function names
- Keep functions small and focused (< 50 lines ideal)
- Add comments for complex logic

### File Organization

\`\`\`
app/               # Next.js app router pages
├── api/          # API routes
├── dashboard/    # Dashboard pages
└── ...
components/        # Reusable components
lib/              # Utility functions and modules
├── escrow.ts     # Escrow logic
├── trustScore.ts # Trust scoring
├── piAuth.ts     # Pi SDK integration
└── ...
\`\`\`

### Component Structure

\`\`\`typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onSubmit: () => void;
}

// 3. Component
export default function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 4. Hooks
  const [loading, setLoading] = useState(false);
  
  // 5. Handlers
  const handleClick = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };
  
  // 6. Render
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={handleClick} disabled={loading}>
        Submit
      </Button>
    </div>
  );
}
\`\`\`

## Testing Requirements

### Unit Tests

- Test utility functions in `lib/`
- Test API endpoints
- Test complex business logic

### Integration Tests

- Test escrow workflows
- Test trust score calculations
- Test authentication flows

### E2E Tests (Future)

- Critical user flows
- Seller registration
- Escrow transactions

### Running Tests

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
\`\`\`

## Documentation

### Code Documentation

- Add JSDoc comments for public functions
- Document complex algorithms
- Explain non-obvious decisions

### API Documentation

- Document all API endpoints
- Include request/response examples
- List possible error codes

### README Updates

- Update README for new features
- Keep setup instructions current
- Add examples for new functionality

## Bilingual Support

When adding UI text:

1. **Add to i18n file** (`lib/i18n.ts`)
2. **Provide both English and Arabic** translations
3. **Test RTL layout** for Arabic
4. **Use semantic keys** (e.g., `seller_registration_title`)

Example:

\`\`\`typescript
// lib/i18n.ts
export const strings = {
  en: {
    new_feature_title: 'My New Feature',
  },
  ar: {
    new_feature_title: 'ميزتي الجديدة',
  }
};
\`\`\`

## Security Considerations

- **Never commit secrets** or API keys
- **Validate all inputs** on both client and server
- **Use parameterized queries** to prevent SQL injection
- **Sanitize user content** to prevent XSS
- **Follow escrow safety** protocols strictly
- **Report security issues** to security@emapofpi.com

## Pi SDK Integration

When working with Pi SDK features:

- Test in Pi Browser, not regular browsers
- Handle authentication failures gracefully
- Follow Pi Network guidelines
- Use mock data for development

## Getting Help

- **GitHub Issues:** Report bugs or request features
- **Discussions:** Ask questions or share ideas
- **Email:** contribute@emapofpi.com
- **Community:** Join our Pi Network community

## Recognition

Contributors will be:

- Listed in our contributors file
- Mentioned in release notes
- Eligible for community rewards in Pi
- Featured in our community hall of fame

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Thank You!

Your contributions make EMAPOFPI better for the entire Pi Network community in Egypt, MENA, and Africa. We appreciate your time and effort!

---

**Questions?** Open an issue or email contribute@emapofpi.com
