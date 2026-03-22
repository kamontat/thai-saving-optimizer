---
name: add-product
description: "Add new bank deposit products to the codebase. Use when: creating a new product, adding a new bank, adding savings accounts, adding fixed deposits, adding long-term deposits, onboarding new bank products."
argument-hint: "Product name, bank name, or URL to the official product page"
---

# Add New Product

Create new bank deposit product definitions and register them in the product index.

## When to Use

- Adding a new savings, fixed-deposit, or long-term deposit product
- Onboarding an entirely new bank's products
- User provides a bank product page URL to add

## Inputs

Gather this information before starting. If the user provides a URL, fetch the official page to extract the data.

| Field | Required | Description |
|-------|----------|-------------|
| Bank name | Yes | Full bank name and abbreviation, e.g. `Kiatnakin Phatra (KKP)` |
| Product name | Yes | Display name, e.g. `KKP Savvy` |
| Product type | Yes | `savings`, `fixed-deposit`, or `long-term` |
| Interest rate tiers | Yes | Array of `{ min, max, rate }` ranges |
| Headline rate | Yes | The highest advertised rate (for savings) or primary rate (for fixed) |
| Official URL | Yes | Link to the bank's product page |
| Term months | If fixed/long-term | Deposit term in months |
| Min/max deposit | If applicable | Minimum and/or maximum deposit amounts |
| Conditions | Recommended | Thai-language account conditions |
| Description | Yes | Thai-language one-line product summary |
| Tags | Yes | From known set (see below) |
| Metadata | Yes | See metadata fields below |

## Procedure

### 1. Determine Product Type

Choose the correct TypeScript type based on the product:

| Product kind | Type to import | Extra fields |
|-------------|---------------|--------------|
| Savings account | `SavingsProduct` | — |
| Fixed deposit | `FixedDepositProduct` | `termMonths` |
| Long-term deposit | `LongTermProduct` | `termMonths` |

### 2. Choose File Name & ID

- **File name**: `src/products/{bank}-{product-slug}.ts` using kebab-case
  - Group related products in one file (e.g. all fixed deposit terms for a bank)
  - Examples: `kkp-savvy.ts`, `scb-fixed-deposits.ts`, `scb-long-term.ts`
- **Product ID**: `{bank}-{product-slug}` matching the pattern, e.g. `kkp-savvy`, `scb-fixed-3m`
  - For term-based products, append the term: `kkp-fixed-3m`, `kkp-fixed-12m`
  - IDs must be unique across all products

### 3. Create the Product File

Use the appropriate template based on product type.

#### Savings Product Template

```typescript
import type { SavingsProduct } from "../models/types.ts";

export const variableName: SavingsProduct = {
	id: "{bank}-{slug}",
	type: "savings",
	name: "{Display Name}",
	bank: "{Full Bank Name (ABBR)}",
	headlineRate: 0.0,
	// Include minDeposit only if there is a minimum
	// minDeposit: 500,
	tiers: [
		{ min: 0, max: 0, rate: 0.0 },
		// Last tier should use Number.POSITIVE_INFINITY for max
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.0 },
	],
	url: "https://...",
	tags: [],
	description: "Thai-language product description",
	conditions: [
		"Thai-language condition 1",
	],
	metadata: {
		officialName: "Thai official product name",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "Thai-language calculation method",
		payoutFrequency: "Thai-language payout schedule",
		notes: "อัตราดอกเบี้ยมีผล ณ {effective date}",
	},
};
```

#### Fixed Deposit / Long-Term Template

For multiple terms from the same bank, share base constants:

```typescript
import type { FixedDepositProduct } from "../models/types.ts";

const baseUrl = "https://...";
const baseConditions = [
	"Thai-language condition 1",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ {effective date}",
};

export const bankFixed3m: FixedDepositProduct = {
	id: "{bank}-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "{Bank} Fixed Deposit 3 Months",
	bank: "{Full Bank Name (ABBR)}",
	headlineRate: 0.0,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.0 },
	],
	url: baseUrl,
	tags: [],
	description: "Thai-language description",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};
```

### 4. Validate Product Data

Before registering, verify:

- [ ] **`id` is unique** — no other product in `src/products/index.ts` uses the same ID
- [ ] **`headlineRate` matches tiers** — for savings: equals the highest tier rate; for fixed: equals the primary rate
- [ ] **Tiers are contiguous** — each tier's `min` equals the previous tier's `max`
- [ ] **Last tier uses `Number.POSITIVE_INFINITY`** for `max` (savings products)
- [ ] **`url` is a valid link** to the official product page
- [ ] **`type` field matches the imported TypeScript type** (`SavingsProduct` → `"savings"`, etc.)
- [ ] **`termMonths` is set** for `fixed-deposit` and `long-term` types
- [ ] **Numeric literals use underscores** for readability: `1_000_000` not `1000000`

### 5. Register in Product Index

Edit `src/products/index.ts`:

1. **Add the import** — group with other imports from the same bank, alphabetically by bank
2. **Add to the `products` array** — place in the correct section:
   - Savings accounts go in the savings section
   - Fixed deposits go in the fixed deposits section
   - Follow the existing section comments in the array

Example of the sections in `src/products/index.ts`:
```
// Savings accounts
// Fixed deposits (regular)
// Fixed deposits (e-Fixed, paperless)
// Fixed deposit special
// Tax-free / tax-exempt fixed deposits
// SCB Savings accounts
// SCB Fixed deposits (E-Passbook)
// SCB Long-term deposits
```

When adding a new bank, create a new clearly-commented section at the end.

### 6. Update Validate-Products Reference

The `validate-products` skill uses per-bank reference files to know how to fetch and verify rates. After adding a new product, update or create the bank's reference file.

**Reference file location**: `.agents/skills/validate-products/references/{bank-prefix}.md`

Existing reference files:
- `kkp.md` — KKP, Dime, Fin products
- `scb.md` — SCB products
- `kbank.md` — KBank products
- `uob.md` — UOB products
- `cimb.md` — CIMB Thai products
- `tcb.md` — Thai Credit Bank products
- `ttb.md` — TMBThanachart Bank products

#### If the bank already has a reference file

Add the new product(s) to the appropriate section in the existing file:
1. Add a row to the product table with the product ID and fetch URL
2. If the product has a unique page structure, add extraction notes

#### If this is a new bank

Create a new reference file at `.agents/skills/validate-products/references/{bank-prefix}.md` using this template:

```markdown
# {Bank Full Name} ({ABBR})

Base URL: `https://...`

Brief note about the bank's page rendering (JS-heavy, server-rendered, etc.).

## {Bank} Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `{id}` | `{url}` |

**How to extract**: Description of where rate data appears on the page.

**What to look for**:
- Rate table format
- Effective date location
- Special conditions section

**Fallback methods**:
1. Bank interest rate overview page
2. Official rate PDF
3. Search for "{bank} อัตราดอกเบี้ยเงินฝาก"

## {Bank} Fixed Deposits

| Product IDs | Fetch URL |
|-------------|-----------|
| `{id-3m}`, `{id-6m}`, ... | `{url}` |

**How to extract**: Description of term-based rate table.

**Fallback methods**:
1. ...
```

Then register the new bank in `.agents/skills/validate-products/SKILL.md` by adding a row to the "Bank Reference Files" table.

### 7. Build & Verify

Run the following to ensure no type errors:

```sh
bun run build
```

### 8. Commit

Use the `commit-changes` skill. The commit should follow:
- **Type**: `feat`
- **Scope**: `products`
- **Message pattern**: `feat(products): add {product name}`
- If adding multiple products from the same bank: `feat(products): add {bank} {product type} products`

## Reference: Known Tags

Use these established tags. Do not invent new tags without good reason.

| Tag | Meaning |
|-----|---------|
| `digital` | Digital/online-only account (e-passbook, app-based) |
| `high-rate` | Notably high interest rate compared to peers |
| `no-min-deposit` | No minimum deposit requirement |
| `tiered` | Interest rate varies by balance tier (step-up) |
| `promotion` | Temporary promotional rate with an end date |
| `tax-free` | Tax-exempt interest |
| `insurance` | Comes with insurance benefit |
| `special-conditions` | Has unusual eligibility or usage conditions |

## Reference: Existing Banks

| Bank | `bank` field value | ID prefix |
|------|-------------------|-----------|
| Kiatnakin Phatra | `Kiatnakin Phatra (KKP)` | `kkp-` |
| Siam Commercial Bank | `Siam Commercial Bank (SCB)` | `scb-` |
| Dime (by KKP) | `Kiatnakin Phatra (KKP)` | `dime-` |
| Fin (by KKP) | `Kiatnakin Phatra (KKP)` | `fin-` |
| Kasikornbank | `Kasikornbank (KBank)` | `kbank-` |
| United Overseas Bank | `United Overseas Bank (UOB)` | `uob-` |
| CIMB Thai | `CIMB Thai (CIMBT)` | `cimb-` |
| Thai Credit Bank | `Thai Credit Bank (TCB)` | `tcb-` |
| TMBThanachart Bank | `TMBThanachart Bank (ttb)` | `ttb-` |

When adding a new bank, pick a short lowercase prefix and use it consistently.

## Reference: Metadata Fields

| Field | Required | Description |
|-------|----------|-------------|
| `officialName` | Yes | Thai official name from the bank |
| `productCategory` | Yes | `เงินฝากออมทรัพย์` / `เงินฝากประจำ` / `เงินฝากระยะยาว` |
| `interestCalculation` | Yes | How interest is calculated (Thai) |
| `payoutFrequency` | Yes | When interest is paid out (Thai) |
| `logo` | No | Path to bank logo asset |
| `color` | No | Brand color hex |
| `insuranceNote` | No | Deposit insurance note if applicable |
| `promotionEnd` | No | End date string for promotional rates |
| `notes` | No | Effective date of rates or other notes |
