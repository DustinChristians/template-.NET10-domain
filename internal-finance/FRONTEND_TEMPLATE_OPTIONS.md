# Front-End Boilerplate Options for a .NET Back-End (2026)

This guide compares popular front-end starter templates that pair well with a .NET API.

## What you asked for
- Accessibility support built in
- Easy theming / design swaps
- Dark mode support
- Mobile responsive by default
- Popular language/ecosystem

---

## Best default choice (most teams)

### 1) **Next.js + TypeScript + Tailwind + shadcn/ui**
**Why this is the top recommendation:**
- **Very popular**: TypeScript/JavaScript ecosystem is top-tier globally.
- **Accessibility**: shadcn/ui primitives are built on Radix UI, which has strong a11y patterns.
- **Design swap flexibility**: Tailwind + component primitives make redesigns fast without fighting rigid theme systems.
- **Dark mode**: first-class support using `next-themes` + Tailwind class strategy.
- **Mobile**: responsive utilities are built in.
- **Scales well**: works for admin panels, SaaS apps, and content-heavy sites.

**Great starter to clone:**
- `create-next-app` (TypeScript)
- add `tailwindcss`, `shadcn/ui`, `next-themes`

**Good if you want:** long-term flexibility and large hiring pool.

---

## Strong alternatives

### 2) **React + Vite + TypeScript + Material UI (MUI)**
- **Very popular** and fast local dev.
- **Accessibility**: MUI provides accessible component implementations.
- **Design system**: robust theming system with design tokens.
- **Dark mode**: built-in theme mode switching.
- **Mobile**: responsive grid and breakpoints.

**Tradeoff:** MUI look can feel opinionated unless heavily customized.

---

### 3) **Angular + Angular Material**
- **Enterprise-proven**, TypeScript-first.
- **Accessibility**: Angular Material has strong a11y support.
- **Dark mode + responsive** supported.
- **Structured architecture** is great for large teams.

**Tradeoff:** heavier framework conventions; can be slower for very small teams.

---

### 4) **Vue 3 + Nuxt + TypeScript + Vuetify**
- **Popular** globally and productive.
- **Accessibility**: improved support with modern component libs.
- **Dark mode + responsive** available out of the box.
- **Design swaps** are straightforward with token-based theming.

**Tradeoff:** slightly smaller hiring pool than React in many markets.

---

### 5) **SvelteKit + TypeScript + Skeleton UI**
- **Great DX and performance**.
- **Dark mode / responsive** are easy.
- **Clean codebase** with less boilerplate.

**Tradeoff:** smaller ecosystem and talent pool vs React/Vue/Angular.

---

## If you want one recommendation to start today

Use **Next.js + TypeScript + Tailwind + shadcn/ui**.

It best matches your requirements for accessibility, design flexibility, dark mode, mobile support, and mainstream adoption while integrating cleanly with a separate .NET API backend.

## Suggested architecture with .NET backend
- Keep front-end and backend in separate projects (or monorepo folders).
- Front-end calls .NET API over HTTPS (REST or GraphQL).
- Use JWT/OIDC auth via your identity provider.
- Add OpenAPI-generated TypeScript clients for type-safe API calls.

## Quick clone/bootstrap commands

```bash
npx create-next-app@latest my-frontend --typescript --eslint --tailwind --app
cd my-frontend
npx shadcn@latest init
npm install next-themes
```

Then wire API base URL via environment variables (e.g., `NEXT_PUBLIC_API_BASE_URL`).
