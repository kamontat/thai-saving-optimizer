# SCB (Siam Commercial Bank)

Base URL: `https://www.scb.co.th/th/personal-banking/deposits/`

SCB pages are heavier (more JS-rendered) compared to KKP. If `fetch_webpage` returns empty content, fall back to browser rendering (`open_browser_page` + `read_page`).

## SCB Savings Accounts

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

## SCB Fixed Deposits (E-Passbook)

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

## SCB Long-Term Deposits (Bonus)

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
