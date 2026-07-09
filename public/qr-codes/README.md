# Product QR Codes

This directory contains static, high-resolution QR codes used for Hanova's physical product packaging and marketing materials.

## Why are these static images?

We intentionally use static `.png` images generated via an external API rather than installing a React QR code library (like `qrcode.react`).

**Reasoning:**

- Generating QR codes dynamically in the browser requires adding extra dependencies to `package.json`.
- This increases the Javascript bundle size, which can negatively impact the initial page load speed.
- Since the URLs for these QR codes are permanent and do not change dynamically per user, generating them once and serving them as static assets is the most performant and optimal approach for our frontend architecture.

## How they were generated

These QR codes were generated using the free public API from [api.qrserver.com](https://goqr.me/api/).

If you need to generate a new QR code or regenerate these in the future, you can use the following PowerShell commands (or just visit the URLs in your browser and save the image):

### 1. Local Testing QR Code

Points to: `http://192.168.29.247:3000/why-hanova`

```powershell
Invoke-WebRequest -Uri "https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=http://192.168.29.247:3000/why-hanova" -OutFile "qr-local.png"
```

### 2. Production QR Code

Points to: `https://hanovalifesciences.com/why-hanova`

```powershell
Invoke-WebRequest -Uri "https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://hanovalifesciences.com/why-hanova" -OutFile "qr-production.png"
```

If the domain or the URL structure changes in the future, simply update the `data=` parameter in the URL above and re-run the command to generate updated images for the packaging team.
