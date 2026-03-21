# KKP (Kiatnakin Phatra)

Base URL: `https://bank.kkpfg.com/th/personal-banking/deposit/`

KKP hosts all deposit products under one domain. Product pages are server-rendered HTML with rate tables.

## KKP Savings Accounts

Each savings product has its own dedicated page with a rate table.

| Product ID | Fetch URL |
|------------|-----------|
| `kkp-start-saving` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-start-saving` |
| `kkp-savvy` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-savvy` |
| `kkp-smart-savings` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-savings` |
| `kkp-smart-bonus` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-bonus` |
| `kkp-smart-growth` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-growth` |
| `kkp-smart-settlement` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-settlement` |
| `kkp-savings-plus` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-savings-plus` |
| `kkp-lifecare-saving` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-lifecare-saving` |
| `kkp-current-plus` | `https://bank.kkpfg.com/th/personal-banking/deposit/current-account` |

**How to extract**: Look for the interest rate table on the page. KKP pages display rates in a structured table with columns for deposit amount ranges (วงเงินฝาก) and interest rates (อัตราดอกเบี้ย). The effective date appears near the table header (e.g. "มีผลตั้งแต่วันที่ ...").

**What to look for**:
- Tiered rate table: amount ranges (e.g. "ไม่เกิน 5,000 บาท", "5,000 - 10,000 บาท") and corresponding rates
- Headline rate: usually the highest advertised rate prominently displayed
- Effective date: typically in Thai Buddhist Era format (e.g. "27 ก.พ. 2569")
- Special conditions (เงื่อนไขพิเศษ) section below the rate table

**Fallback methods**:
1. If the individual product page fails, try the savings overview page: `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account`
2. If the website is unreachable, check KKP's interest rate PDF announcement: `https://bank.kkpfg.com/th/interest-rates` — this page lists links to official rate PDFs
3. Search for "KKP อัตราดอกเบี้ยเงินฝาก" to find the latest rate announcement press release

## KKP Fixed Deposits (Regular)

All regular fixed deposit products share a **single page** with a rate table organized by term.

| Product IDs | Fetch URL |
|-------------|-----------|
| `kkp-fixed-3m`, `kkp-fixed-6m`, `kkp-fixed-9m`, `kkp-fixed-12m`, `kkp-fixed-24m`, `kkp-fixed-36m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit` |

**How to extract**: The page shows a single table with rows for each term (3, 6, 9, 12, 24, 36 months). Columns typically break down rates by deposit amount range. The "สมุดคู่ฝาก" (passbook) section is for regular fixed deposits.

**What to look for**:
- A table row per term length (ระยะเวลาฝาก)
- Rate columns split by deposit amount (e.g. "ต่ำกว่า 100 ล้านบาท" vs "100 ล้านบาทขึ้นไป")
- Effective date header

**Fallback methods**:
1. Try the KKP interest rates overview page: `https://bank.kkpfg.com/th/interest-rates`
2. Download the official PDF rate sheet from that page
3. Search for "KKP อัตราดอกเบี้ยเงินฝากประจำ" for press releases

## KKP E-Fixed Deposits (Paperless)

E-Fixed (no passbook) products are on the same fixed deposit page but in a separate section.

| Product IDs | Fetch URL |
|-------------|-----------|
| `kkp-e-fixed-3m`, `kkp-e-fixed-6m`, `kkp-e-fixed-12m`, `kkp-e-fixed-special-10m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit` |

**How to extract**: On the fixed deposit page, look for the "ไม่มีสมุดคู่ฝาก" (no passbook / E-Fixed) section. The special 10-month product may appear under a "พิเศษ" (special) subsection or promotional banner.

**Fallback methods**: Same as regular fixed deposits above.

## KKP Fixed Special

| Product ID | Fetch URL |
|------------|-----------|
| `kkp-fixed-special-10m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit` |

**How to extract**: Look for the promotional/special fixed deposit section on the fixed deposit page. This product is typically a time-limited promotion with its own banner or highlighted section.

**Fallback methods**: Same as regular fixed deposits above. Also check KKP's promotions page or news section for special product announcements.

## KKP Tax-Free & Senior (55+) Fixed Deposits

These have dedicated product pages.

| Product IDs | Fetch URL |
|-------------|-----------|
| `kkp-free-55-up-12m`, `kkp-free-55-up-24m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit/kkp-free-55-up` |
| `kkp-tax-free-24m`, `kkp-tax-free-36m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit/kkp-tax-free` |

**How to extract**: Each page shows a rate table with term-based rows (12m/24m or 24m/36m). These are tax-exempt products so they include specific eligibility conditions.

**Fallback methods**:
1. Fall back to the main fixed deposit page: `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit`
2. KKP interest rates overview: `https://bank.kkpfg.com/th/interest-rates`
3. Search for "KKP เงินฝากปลอดภาษี" or "KKP Free 55 Up"

## Dime Save & Fin Save (KKP Fintech)

These are fintech savings products under KKP's branding, hosted on the same domain.

| Product ID | Fetch URL |
|------------|-----------|
| `dime-save` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/dime-save` |
| `fin-save` | `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/fin-save-by-kkp` |

**How to extract**: Same structure as KKP savings pages — rate table with tiered amounts and rates.

**Fallback methods**:
1. Try the KKP savings overview: `https://bank.kkpfg.com/th/personal-banking/deposit/savings-account`
2. Check the Dime app or Fin app official websites/social media for rate announcements
3. Search for "Dime Save อัตราดอกเบี้ย" or "Fin Save อัตราดอกเบี้ย"
