# Experimental Tokens

This directory contains experimental and unstable design tokens that are under active development.

## ⚠️ Warning

**These tokens are experimental and may:**
- Have breaking API changes without notice
- Be incomplete or missing token definitions
- Have incorrect values or naming
- Be removed in future versions

## Usage

Import experimental tokens using deep imports:

```typescript
import { colorTokens } from '@msinternal/sharepoint-ui-tokens/experimental';
```

## Guidelines

- Only use experimental tokens if you're prepared for breaking changes
- Always test thoroughly before using in production
- Consider these tokens as preview/beta versions
- Provide feedback to the design system team

## Migration Path

When experimental tokens become stable, they will be moved to the main src directory and re-exported from the package root.

## Token Categories

Experimental tokens may include:
- New color palettes
- Updated spacing scales
- New typography tokens
- Motion and animation tokens
- Experimental semantic tokens
