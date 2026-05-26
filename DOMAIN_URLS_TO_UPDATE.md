# CRITICAL: Domain URLs to Update

Replace all instances of `hanovalifesciences.com` with your actual domain throughout these files:

## Files to Update:

### 1. `/index.html` - Update these lines:
```html
<!-- Line 13: Canonical URL -->
<link rel="canonical" href="https://YOUR-DOMAIN.com/" />

<!-- Line 19: OpenGraph URL -->
<meta property="og:url" content="https://YOUR-DOMAIN.com/" />

<!-- Line 20-21: OpenGraph Image URLs -->
<meta property="og:image" content="https://YOUR-DOMAIN.com/og-image.png" />

<!-- Sitemap reference (if added) -->
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />

<!-- In JSON-LD Organization schema (around line 54+) -->
"url": "https://YOUR-DOMAIN.com",
"logo": "https://YOUR-DOMAIN.com/logo.png",

<!-- In JSON-LD WebSite schema -->
"url": "https://YOUR-DOMAIN.com",
```

### 2. `/public/robots.txt` - Update:
```text
Line 15: Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
```

### 3. `/public/sitemap.xml` - Update ALL:
Replace all instances of:
```xml
https://hanovalifesciences.com/
```
With:
```xml
https://YOUR-DOMAIN.com/
```

Example - change this:
```xml
<url>
  <loc>https://hanovalifesciences.com/</loc>
  ...
</url>
```

To this:
```xml
<url>
  <loc>https://YOUR-DOMAIN.com/</loc>
  ...
</url>
```

---

## Example Search & Replace

### For VS Code:
1. Press `Ctrl+H` (or `Cmd+H` on Mac)
2. In "Find" field: `hanovalifesciences.com`
3. In "Replace" field: `YOUR-DOMAIN.com`
4. Click "Replace All"

---

## After Updating:

1. ✅ Build and deploy: `npm run build`
2. ✅ Submit to Google Search Console
3. ✅ Submit sitemap
4. ✅ Wait 1-2 weeks for indexing

---

Note: If you're using a hosting service (Vercel, Netlify, etc.), the robots.txt and sitemap.xml in the `/public` folder will automatically be served from your domain root (e.g., https://YOUR-DOMAIN.com/robots.txt)
