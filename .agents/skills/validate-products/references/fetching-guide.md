# Product Fetching Guide

General strategies for fetching interest rate data from bank websites.

For bank-specific instructions (URLs, extraction methods, fallback strategies), see the per-bank reference files:

- [kkp.md](./kkp.md) — KKP, Dime, Fin products
- [scb.md](./scb.md) — SCB products
- [kbank.md](./kbank.md) — KBank products
- [uob.md](./uob.md) — UOB products

## General Fallback Strategy

If all bank-specific methods fail:

1. **Google search**: Search for `"[product name]" อัตราดอกเบี้ย [year in BE]` (e.g. `"KKP Start Saving" อัตราดอกเบี้ย 2569`)
2. **Bank of Thailand**: Check the BOT deposit rate reports at `https://www.bot.or.th/th/statistics/interest-rate.html` — these aggregate rates across all Thai banks
3. **Financial comparison sites**: Sites like `moneyhub.in.th` or `silkspan.com` aggregate Thai bank deposit rates
4. **Ask the user**: If all automated methods fail, report which products could not be verified and ask the user to manually check the bank website or contact the bank
