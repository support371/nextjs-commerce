# GEM Cybersecurity Assist Production Deployment

## Target repository

`support371/nextjs-commerce`

## Production branch strategy

Recommended:

1. Keep `gem-production-merchant-storefront` as the active feature branch.
2. Review and merge the existing PR into `main`.
3. Let Vercel Git Integration deploy `main` to production.
4. Connect `gemcybersecurityassist.com` as the production domain.

## Required Vercel environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://gemcybersecurityassist.com
GEM_SUPPORT_EMAIL=Marketing@gemcybersecurityassist.com
GEM_PUBLIC_PHONE=+14017022460
DATABASE_URL=postgresql://replace-with-production-db
AUTH_SECRET=replace-with-strong-random-secret
CRM_WEBHOOK_URL=replace-with-crm-or-email-webhook
PAYMENT_PROVIDER=stripe_or_invoice
STRIPE_SECRET_KEY=replace-if-using-stripe
STRIPE_WEBHOOK_SECRET=replace-if-using-stripe
```

## Production readiness checklist

- [ ] Merge existing PR into `main`.
- [ ] Confirm Vercel project deploys successfully.
- [ ] Add `gemcybersecurityassist.com` and `www.gemcybersecurityassist.com` in Vercel domains.
- [ ] Update DNS to Vercel.
- [ ] Add final business address to company profile and Merchant Center.
- [ ] Connect contact forms to CRM/email.
- [ ] Connect checkout to Stripe, Shopify, WooCommerce, or invoice workflow.
- [ ] Connect database using `data/gem-schema.sql`.
- [ ] Test `/merchant-feed.txt` on production domain.
- [ ] Submit production feed URL to Google Merchant Center.

## Important live URLs

```text
https://gemcybersecurityassist.com/
https://gemcybersecurityassist.com/store
https://gemcybersecurityassist.com/products
https://gemcybersecurityassist.com/pricing
https://gemcybersecurityassist.com/services
https://gemcybersecurityassist.com/compliance
https://gemcybersecurityassist.com/trust
https://gemcybersecurityassist.com/contact
https://gemcybersecurityassist.com/checkout
https://gemcybersecurityassist.com/admin
https://gemcybersecurityassist.com/portal
https://gemcybersecurityassist.com/merchant-feed.txt
```

## Merchant Center feed

Production source URL:

```text
https://gemcybersecurityassist.com/merchant-feed.txt
```

The feed is generated from `lib/gem-catalog.ts` and should remain synchronized with product pages.

## Compliance note

Do not publish trust seals, Google approval marks, Trustpilot ratings, SOC 2 certification, ISO certification, PCI certification, HIPAA certification, or regulator approval unless formally verified. Use readiness/alignment wording until certifications are obtained.
