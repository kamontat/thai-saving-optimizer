# Product Fetching Guide

Per-bank and per-product instructions for fetching current interest rate data from official sources.

## KKP (Kiatnakin Phatra)

KKP hosts all deposit products under `https://bank.kkpfg.com/th/personal-banking/deposit/`. Product pages are server-rendered HTML with rate tables.

### KKP Savings Accounts

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

### KKP Fixed Deposits (Regular)

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

### KKP E-Fixed Deposits (Paperless)

E-Fixed (no passbook) products are on the same fixed deposit page but in a separate section.

| Product IDs | Fetch URL |
|-------------|-----------|
| `kkp-e-fixed-3m`, `kkp-e-fixed-6m`, `kkp-e-fixed-12m`, `kkp-e-fixed-special-10m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit` |

**How to extract**: On the fixed deposit page, look for the "ไม่มีสมุดคู่ฝาก" (no passbook / E-Fixed) section. The special 10-month product may appear under a "พิเศษ" (special) subsection or promotional banner.

**Fallback methods**: Same as regular fixed deposits above.

### KKP Fixed Special

| Product ID | Fetch URL |
|------------|-----------|
| `kkp-fixed-special-10m` | `https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit` |

**How to extract**: Look for the promotional/special fixed deposit section on the fixed deposit page. This product is typically a time-limited promotion with its own banner or highlighted section.

**Fallback methods**: Same as regular fixed deposits above. Also check KKP's promotions page or news section for special product announcements.

### KKP Tax-Free & Senior (55+) Fixed Deposits

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

---

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

---

## SCB (Siam Commercial Bank)

SCB pages are at `https://www.scb.co.th/th/personal-banking/deposits/`. Pages are heavier (more JS-rendered) compared to KKP.

### SCB Savings Accounts

Each savings product has its own page.

| Product ID | Fetch URL |
|------------|-----------|
| `scb-savings` | `https://www.scb.co.th/th/personal-banking/deposits/savings-account/savings-account.html` |
| `scb-easy-savings` | `https://www.scb.co.th/th/personal-banking/deposits/savings-account/easy-saving-account.html` |
| `scb-jad-tem` | `https://www.scb.co.th/th/personal-banking/deposits/savings-account/jad-tem-account.html` |

**How to extract**: SCB pages include rate information inline or in expandable sections. Look for "อัตราดอกเบี้ย" headings. Rates are often displayed in a comparison-style layout rather than a simple table.

**What to look for**:
- Rate display: may show a single highlighted rate with tier details in expandable FAQ/details sections
- Terms and conditions: usually in an accordion section below the main content
- Effective date footer: "อัตราดอกเบี้ย ณ วันที่ ..."

**Fallback methods**:
1. SCB interest rate announcement page: `https://www.scb.co.th/th/personal-banking/deposits/interest-rates.html`
2. SCB publishes structured rate PDFs — look for download links on the interest rates page
3. Search for "SCB อัตราดอกเบี้ยเงินฝากออมทรัพย์" for press releases
4. If the HTML page content is JS-rendered and `fetch_webpage` returns empty content, use the browser tools (`open_browser_page` + `read_page`) to render the page with JavaScript first

### SCB Fixed Deposits (E-Passbook)

All SCB fixed deposit products share **one page** with a term-based table.

| Product IDs | Fetch URL |
|-------------|-----------|
| `scb-fixed-3m`, `scb-fixed-6m`, `scb-fixed-12m`, `scb-fixed-24m`, `scb-fixed-36m` | `https://www.scb.co.th/th/personal-banking/deposits/fixed-deposit-account/fixed-deposit-account.html` |

**How to extract**: Look for the E-Passbook (ไม่มีสมุดคู่ฝาก) rate table. Rows correspond to terms (3, 6, 12, 24, 36 months). Rates may be split by deposit amount ranges.

**Fallback methods**:
1. SCB interest rate page: `https://www.scb.co.th/th/personal-banking/deposits/interest-rates.html`
2. Download rate PDF from the above page
3. Search for "SCB อัตราดอกเบี้ยเงินฝากประจำ"
4. Use browser rendering if HTML fetch returns empty (JS-heavy page)

### SCB Long-Term Deposits (Bonus)

Each long-term product has its own page.

| Product ID | Fetch URL |
|------------|-----------|
| `scb-bonus-24m` | `https://www.scb.co.th/th/personal-banking/deposits/long-term-deposit-accounts/bonus-fixed-account-24-months.html` |
| `scb-bonus-36m` | `https://www.scb.co.th/th/personal-banking/deposits/long-term-deposit-accounts/bonus-fixed-account-36-months.html` |

**How to extract**: These pages show a single fixed rate with monthly deposit requirements and maturity conditions. Look for the "อัตราดอกเบี้ย" section.

**What to look for**:
- Fixed annual rate
- Monthly deposit maximum (maxDeposit field relates to monthly contribution × number of months)
- Compounding rules
- Early withdrawal penalty conditions

**Fallback methods**:
1. SCB long-term deposit overview: `https://www.scb.co.th/th/personal-banking/deposits/long-term-deposit-accounts.html`
2. SCB interest rate page: `https://www.scb.co.th/th/personal-banking/deposits/interest-rates.html`
3. Search for "SCB เงินฝากระยะยาวทวีทรัพย์"
4. Use browser rendering if needed

---

## General Fallback Strategy

If all bank-specific methods fail:

1. **Google search**: Search for `"[product name]" อัตราดอกเบี้ย [year in BE]` (e.g. `"KKP Start Saving" อัตราดอกเบี้ย 2569`)
2. **Bank of Thailand**: Check the BOT deposit rate reports at `https://www.bot.or.th/th/statistics/interest-rate.html` — these aggregate rates across all Thai banks
3. **Financial comparison sites**: Sites like `moneyhub.in.th` or `silkspan.com` aggregate Thai bank deposit rates
4. **Ask the user**: If all automated methods fail, report which products could not be verified and ask the user to manually check the bank website or contact the bank
