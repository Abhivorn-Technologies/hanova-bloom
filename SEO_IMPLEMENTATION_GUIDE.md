# Hanova SEO Implementation Checklist & Guide

## ✅ What Has Been Done

### 1. **Enhanced Meta Tags** (in `index.html`)
- ✅ Added comprehensive meta tags for SEO
- ✅ Added Open Graph tags for social media sharing
- ✅ Added Twitter Card tags for Twitter sharing
- ✅ Added canonical URL tag
- ✅ Added robots meta tag for search engines
- ✅ Added keywords meta tag
- ✅ Added author and language tags

### 2. **Structured Data (Schema Markup)**
- ✅ Added Organization schema (JSON-LD) with company info, social links, contact
- ✅ Added WebSite schema for search functionality

### 3. **Sitemap**
- ✅ Created `public/sitemap.xml` with all 8 pages
- ✅ Included lastmod and priority values for each page
- ✅ Linked sitemap in HTML head tag

### 4. **Robots.txt**
- ✅ Created `public/robots.txt` to guide search engine crawlers
- ✅ Added sitemap URL reference
- ✅ Set appropriate crawl delay

---

## 🔧 What You MUST Do Next

### 1. **Update Domain URL** (CRITICAL!)
In the following files, replace `https://hanovalifesciences.com` with your actual domain:

- `index.html` - Update all URLs in meta tags
  - Line 13: `<link rel="canonical" href="https://hanovalifesciences.com/" />`
  - Line 19: `<meta property="og:url" content="https://hanovalifesciences.com/" />`
  - Line 20-21: Image URLs
  - Meta tags with sitemap references

- `public/robots.txt`
  - Line 15: `Sitemap: https://hanovalifesciences.com/sitemap.xml`

- `public/sitemap.xml`
  - All `<loc>` tags (all page URLs)

### 2. **Google Search Console Setup** (ESSENTIAL!)

1. Go to: https://search.google.com/search-console
2. Add your property (domain):
   - Select "URL prefix" option
   - Enter your website URL (e.g., https://yourdomain.com)
3. Verify ownership by choosing one of these methods:
   - HTML file upload
   - HTML meta tag (add the provided meta tag to `index.html`)
   - DNS record
   - Google Analytics verification
   - Google Tag Manager verification

4. Once verified, submit your sitemap:
   - Navigate to Sitemaps section
   - Click "Add/test sitemap"
   - Enter: `sitemap.xml` or your full sitemap URL

### 3. **Google Analytics Setup** (RECOMMENDED)

1. Create Google Analytics account: https://analytics.google.com
2. Get your Measurement ID
3. Add to your React app using: `npm install @react-google-analytics` or similar
4. Add Google Analytics script before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. **Update Image Assets** (IMPORTANT!)

- Create or upload an OG image (1200x630px) to `public/og-image.png`
- Create or upload a logo to `public/logo.png`
- These are referenced in the meta tags

### 5. **Update Social Media References**

In `index.html`, find these lines and update with your actual social handles:
```html
"sameAs": [
  "https://www.facebook.com/hanovalife",        <!-- Update handle -->
  "https://www.instagram.com/hanovalife",       <!-- Update handle -->
  "https://twitter.com/hanovalife"              <!-- Update handle -->
]
```

### 6. **Bing Webmaster Tools** (RECOMMENDED)

1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap (same process as Google Search Console)

### 7. **Core Web Vitals Optimization** (PERFORMANCE)

- Monitor in Google Search Console
- Key metrics:
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1

Use your Vite build to ensure optimal performance:
```bash
npm run build
npm run preview
```

---

## 📋 Additional SEO Best Practices

### Page-Specific Meta Tags (Per Page Optimization)
For even better SEO, add unique meta descriptions and titles to each page:

Example for Products page:
```javascript
// In Products.tsx or use a meta tag library
<Helmet>
  <title>Premium Wellness Products - Hanova Life Sciences</title>
  <meta name="description" content="Explore our range of functional honey sachets and wellness products..." />
</Helmet>
```

Install and use Helmet:
```bash
npm install react-helmet-async
```

### Mobile-Friendly Testing
- Test at: https://search.google.com/test/mobile-friendly
- Your site should be fully responsive

### Rich Snippets
- Consider adding more schema markup for:
  - Product schema (for products page)
  - Article schema (for blogs page)
  - FAQSchema (if you have FAQs)

### Internal Linking
- Ensure all pages link to each other appropriately
- Use descriptive anchor text (avoid "click here")

### URL Structure
- Your URL structure is already good: `/about`, `/products`, etc.
- Keep URLs short, descriptive, and keyword-rich

### Content Optimization
- Include target keywords naturally in:
  - Page titles
  - Meta descriptions
  - Headings (H1, H2, H3)
  - Body content
  - Image alt text

### Page Speed
- Optimize images (use WebP format)
- Enable GZIP compression
- Minimize CSS/JS
- Vite already optimizes this on `npm run build`

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Replace all `hanovalifesciences.com` URLs with your actual domain
- [ ] Verify all meta tags are correct
- [ ] Test responsive design on mobile
- [ ] Check all links work (broken links hurt SEO)
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Add Google Analytics tracking code
- [ ] Test mobile-friendly rendering
- [ ] Check Core Web Vitals performance
- [ ] Update social media links
- [ ] Create and upload OG image and logo

---

## 📊 Monitoring Your SEO Progress

### Google Search Console
- Monitor clicks and impressions
- Track keyword rankings
- Check for crawl errors
- View coverage reports

### Google Analytics
- Track user behavior
- Monitor traffic sources
- Track conversions

### Third-party Tools (Optional)
- Ahrefs
- SEMrush
- Moz
- Ubersuggest

---

## 🔗 Useful Resources

- Google SEO Starter Guide: https://developers.google.com/search/docs
- Schema.org Documentation: https://schema.org
- Search Console Help: https://support.google.com/webmasters
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev

---

## ❓ Common Issues & Solutions

### Q: How long until my site appears in Google?
**A:** Usually 2-4 weeks after initial crawl, but indexed pages may appear within days.

### Q: Do I need to do anything with `robots.txt` and `sitemap.xml`?
**A:** They're now in your `public/` folder and will be served from your domain root. Just ensure your domain URL is correct.

### Q: Should I add internal linking?
**A:** Yes! Link between related pages using descriptive anchor text. This helps Google understand your site structure.

### Q: How often should I update my sitemap?
**A:** Update it whenever you add/remove pages. The `public/sitemap.xml` file is static, so update it manually as needed.

---

Last Updated: 2026-05-26
Next Review: 2026-06-26
