---
name: validate-products
description: "Validate product interest rate data against official bank websites. Use when: checking if product data is up to date, auditing rates, refreshing stale data, verifying interest rates, updating bank products."
argument-hint: "Optionally specify bank name or product ID to validate a subset"
---

# Validate & Update Product Data

Fetch official bank product pages, compare interest rates and conditions with the hardcoded data in `src/products/`, and update any stale entries.

## When to Use

- Periodic audit of product data accuracy
- After a bank announces rate changes
- Before a release to ensure data freshness
- When a user reports incorrect rates

## Product Data Sources

All products live in `src/products/*.ts` and are registered in `src/products/index.ts`. Each product has a `url` field linking to the official bank product page. The `metadata.notes` field often contains the effective date of the current rates (e.g. "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569").

### Bank Reference Files

Each bank has a dedicated reference file with fetch URLs, extraction instructions, and fallback methods:

| Bank | Reference File |
|------|---------------|
| KKP (incl. Dime, Fin) | [references/kkp.md](./references/kkp.md) |
| SCB | [references/scb.md](./references/scb.md) |
| KBank | [references/kbank.md](./references/kbank.md) |
| UOB | [references/uob.md](./references/uob.md) |

When validating a specific bank, read the corresponding reference file for detailed per-product fetch instructions.

## Procedure

### 1. Collect Current Product Data

Run the [list-products script](./scripts/list-products.ts) to output a JSON summary of all products with their current rates and source URLs:

```sh
bun .agents/skills/validate-products/scripts/list-products.ts
```

This prints each product's `id`, `name`, `headlineRate`, `tiers`, `url`, and `metadata.notes`.

### 2. Fetch Official Bank Pages

Read the bank-specific reference file (see table above) for detailed per-product instructions on which URLs to fetch, how to extract rate data from each page, and what fallback methods to use when the primary fetch fails.

**Summary of fetch strategy per bank:**

1. **KKP products** — Each savings product has its own page. Fixed deposits share a single page with a term-based table. Use `fetch_webpage` on each product's `url` field. See [references/kkp.md](./references/kkp.md).
2. **SCB products** — Individual pages per savings product; shared page for fixed deposits. SCB pages are JS-heavy — if `fetch_webpage` returns empty, fall back to browser rendering. See [references/scb.md](./references/scb.md).
3. **KBank products** — JS-heavy pages. Use browser rendering if `fetch_webpage` returns empty. See [references/kbank.md](./references/kbank.md).
4. **UOB products** — Savings pages show rates inline. Fixed deposit rates require the official rate PDF. See [references/uob.md](./references/uob.md).
5. **Dime / Fin** — Same structure as KKP savings pages. See [references/kkp.md](./references/kkp.md).

**If a product page is unreachable**, the bank reference files include 3-4 fallback methods per bank (rate PDFs, interest rate overview pages, Google search, BOT aggregate data).

### 3. Extract & Compare Rates

From each fetched page, identify:
- **Interest rate tiers** (amount ranges and their rates)
- **Headline rate** (primary advertised rate)
- **Effective date** of the displayed rates
- **Minimum/maximum deposit** requirements
- **Conditions or restrictions** changes

Compare each extracted value against the hardcoded product data. Look for:
- Rate changes (tiers, headlineRate)
- New tiers added or removed
- Changed deposit limits (minDeposit, maxDeposit)
- Updated conditions
- New effective dates

### 4. Report Findings

Present a summary table:

```
| Product ID | Field | Current Value | Bank Value | Status |
|------------|-------|---------------|------------|--------|
| kkp-savvy  | headlineRate | 1.55 | 1.65 | CHANGED |
| scb-savings| tiers[0].rate| 0.25 | 0.25 | OK |
```

Mark each product as:
- **OK** — Data matches
- **CHANGED** — Rate or condition differs
- **UNKNOWN** — Could not verify (page unavailable or format changed)

### 5. Update Stale Products

For each product marked **CHANGED**:

1. Open the corresponding file in `src/products/`
2. Update the changed fields:
   - `headlineRate` — The primary advertised rate
   - `tiers` — Array of `{ min, max, rate }` objects
   - `minDeposit` / `maxDeposit` — If changed
   - `conditions` — Updated Thai-language conditions
   - `metadata.notes` — Update the effective date
3. Ensure `headlineRate` matches the highest tier rate (for savings products) or the primary rate (for fixed deposits)
4. Verify tier boundaries are contiguous: each tier's `min` equals the previous tier's `max`

### 6. Validate After Update

After making changes, run:

```sh
bun run check
```

This runs Biome lint/format checks to ensure the updated files are correct.

## Data Integrity Rules

- `headlineRate` must equal the highest `rate` value in `tiers` (for savings) or the primary rate (for fixed deposits)
- Tiers must be sorted by `min` ascending
- Tiers must be contiguous: `tiers[i].max === tiers[i+1].min`
- The last tier's `max` should be `Number.POSITIVE_INFINITY`
- `url` must be a valid, reachable URL
- All Thai-language strings (`description`, `conditions`, `metadata.*`) should use proper Thai text

## Scope Filtering

If the user specifies a bank name or product ID:
- Filter to only those products
- Skip fetching pages for other banks

Examples:
- "validate KKP products" → only products with `bank` containing "KKP"
- "validate scb-savings" → only the product with `id: "scb-savings"`
- "validate fixed deposits" → only products with `type: "fixed-deposit"`
