## Goal

Convert the project from TanStack Start (SSR/Cloudflare) to a plain **React + Vite SPA** using `react-router-dom`, so it deploys cleanly on Vercel without 404s.

## Changes

### 1. Remove TanStack stack

- Uninstall: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-*`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`, `wrangler`.
- Delete: `src/routes/__root.tsx`, `src/routeTree.gen.ts`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `wrangler.jsonc`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`.

### 2. Add standard Vite React SPA bootstrap

- New `vite.config.ts` with `@vitejs/plugin-react` + `@tailwindcss/vite` + path alias `@`.
- New `index.html` at project root with favicon, fonts, `<div id="root">`.
- New `src/main.tsx` mounting `<App />` with `BrowserRouter`.
- New `src/App.tsx` with `<Routes>` for `/`, `/about`, `/products`, `/contact`, `/privacy`, `/terms`, `/security`, plus 404.

### 3. Migrate route files

Convert each `src/routes/*.tsx` to a plain page component under `src/pages/` (Index, About, Products, Contact, Privacy, Terms, Security). Drop `createFileRoute` / `head()`; move `<title>`/meta to `index.html` (or via a tiny `useEffect` document.title per page).

### 4. Update Navbar / Links

Replace `@tanstack/react-router` `Link` with `react-router-dom` `Link` / `NavLink` in `Navbar.tsx` and footer.

### 5. Vercel SPA routing

Add `vercel.json` with a catch-all rewrite to `/index.html` so deep links don't 404.

### 6. package.json scripts

Standard: `dev: vite`, `build: vite build`, `preview: vite preview`.

## Result

Plain SPA — `npm run build` → `dist/` → deploys to Vercel with no 404s. All existing sections/components keep working unchanged.
