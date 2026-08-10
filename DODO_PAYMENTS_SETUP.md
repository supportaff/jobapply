# Dodo Payments setup

JobApply uses Dodo Checkout Sessions for the $499 one-time, 3-month managed job application service.

## Environment variables

Configure these in Vercel (or your local environment). Never commit the values.

- `DODO_PAYMENTS_API_KEY` — Dodo server-side API key
- `DODO_PAYMENTS_PRODUCT_ID` — the Dodo product ID configured for the $499 JobApply launch offer
- `DODO_PAYMENTS_ENVIRONMENT` — `test_mode` for testing, `live_mode` for production
- `DODO_PAYMENTS_WEBHOOK_KEY` — signing secret for the Dodo webhook
- `NEXT_PUBLIC_SITE_URL` — production site URL
- `JOBAPPLY_ADMIN_KEY` — long random secret for the internal payment generator

## Customer flow

1. Candidate books a consultation through Calendly.
2. JobApply reviews the candidate's profile, target role, market and suitability.
3. If accepted, JobApply creates a Dodo checkout session from `/admin/payment`.
4. The generated hosted checkout URL is sent privately to the accepted candidate.
5. Dodo redirects successful payments to `/payment-success`.
6. Dodo sends `payment.succeeded` to `/api/dodo-webhook`.
7. JobApply begins onboarding and the 3-month managed service.

## Dodo dashboard

Create a one-time product priced at **$499 USD** for the launch offer. Configure the production webhook URL as:

`https://YOUR_DOMAIN/api/dodo-webhook`

Subscribe to `payment.succeeded`, `payment.failed`, `payment.processing`, `payment.cancelled`, and the refund/dispute events you want to track.

Dodo recommends verifying webhook signatures before processing payment events. The implementation uses the SDK's webhook verification helper.
