# KBank (Kasikornbank)

Base URL: `https://www.kasikornbank.com/th/personal/`

KBank pages are JS-heavy. If `fetch_webpage` returns empty content, fall back to browser rendering (`open_browser_page` + `read_page`).

## KBank Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `kbank-savings` | `https://www.kasikornbank.com/th/personal/deposit/pages/saving-account.aspx` |
| `kbank-e-savings` | `https://www.kasikornbank.com/th/personal/deposit/pages/e-saving-account.aspx` |
| `kbank-e-pocket` | `https://www.kasikornbank.com/th/personal/deposit/pages/k-esavings-x.aspx` |

**How to extract**: Look for "อัตราดอกเบี้ย" sections. KBank pages often show rates in expandable FAQ-style sections or linked PDFs.

**What to look for**:
- Tiered rate table with deposit amount ranges and rates
- Headline rate prominently displayed
- Effective date in Thai Buddhist Era format

**Fallback methods**:
1. KBank interest rate page: `https://www.kasikornbank.com/th/rate/pages/deposit-rate.aspx`
2. Download the official rate PDF from the interest rate page
3. Search for "KBank อัตราดอกเบี้ยเงินฝากออมทรัพย์"
4. Use browser rendering if HTML fetch returns empty

## KBank Fixed Deposits

All KBank fixed deposit products share a single rate page.

| Product IDs | Fetch URL |
|-------------|-----------|
| `kbank-fixed-3m`, `kbank-fixed-6m`, `kbank-fixed-12m`, `kbank-fixed-24m`, `kbank-fixed-36m` | `https://www.kasikornbank.com/th/personal/deposit/pages/fixed-deposit.aspx` |

**How to extract**: Look for a term-based rate table. Rates may differ between passbook and non-passbook types.

**Fallback methods**:
1. KBank interest rate page: `https://www.kasikornbank.com/th/rate/pages/deposit-rate.aspx`
2. Download the official rate PDF
3. Search for "KBank อัตราดอกเบี้ยเงินฝากประจำ"
4. Use browser rendering if needed

## KBank Special Products

| Product ID | Fetch URL |
|------------|-----------|
| `kbank-flex-family` | `https://www.kasikornbank.com/th/personal/deposit/pages/k-fixed-deposit-family.aspx` |
| `kbank-super-senior` | `https://www.kasikornbank.com/th/personal/deposit/pages/k-super-senior.aspx` |
| `kbank-taweesup` | `https://www.kasikornbank.com/th/personal/deposit/pages/taweesub.aspx` |

**How to extract**: Each product has its own page with specific terms and conditions. Look for rate tables and eligibility requirements.

**Fallback methods**:
1. KBank deposit overview: `https://www.kasikornbank.com/th/personal/deposit/pages/deposit.aspx`
2. KBank interest rate page: `https://www.kasikornbank.com/th/rate/pages/deposit-rate.aspx`
3. Search for the specific product name + "อัตราดอกเบี้ย"
