# DiasporaCY GitHub Pages website

A bilingual, responsive static website for DiasporaCY. It uses only HTML, CSS and vanilla JavaScript, so it can be hosted directly with GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `diasporacy-website`.
2. Upload **the contents of this folder** to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will display the public URL after deployment.

## Important before production

The supplied Greek and English DiasporaCY privacy notices have been integrated into `privacy-el.html` and `privacy-en.html`, including the official contact and Data Protection Officer details.

Review `terms.html` before production and replace it if the project already has formally approved Terms of Service.

## Main files

- `index.html` — bilingual landing page
- `privacy-en.html` — English privacy policy page
- `privacy-el.html` — Greek privacy policy page
- `terms.html` — Terms of Service page
- `assets/css/styles.css` — complete responsive styling
- `assets/js/main.js` — language switch, theme switch, screenshot gallery, mobile menu
- `assets/images/` — optimised logos and screenshots

## Optional custom domain

Add a `CNAME` file to the repository root containing only the domain name, for example:

```text
app.example.gov.cy
```

Then configure the DNS records requested by GitHub Pages.
