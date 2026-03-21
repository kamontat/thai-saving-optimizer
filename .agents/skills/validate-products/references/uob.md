# UOB (United Overseas Bank)

Base URL: `https://www.uob.co.th/personal/deposits/`

UOB pages are moderately JS-heavy. Product pages show overview information but detailed rate tables are in the official rate PDF.

## Official Rate Table (PDF)

UOB publishes its deposit rate table as a PDF. The latest version is linked from the announcement page:

- **Announcement page**: `https://www.uob.co.th/personal/announcement/index.page`
- **Rate PDF pattern**: `https://www.uob.co.th/assets/web-resources/pdf/personal/announcement/1deposite-rates/{year}/{day}{month}{year}-th.pdf`
  - Example: `https://www.uob.co.th/assets/web-resources/pdf/personal/announcement/1deposite-rates/2026/1mar2026-th.pdf`

**How to find the current PDF**: Fetch or open the announcement page and look for "ตารางที่ 1 อัตราดอกเบี้ยเงินฝาก" — the link in that row points to the latest rate PDF.

**How to extract from PDF**: Download the PDF and use the pdf-reader skill to extract text. The PDF contains all savings and fixed deposit rates organized by section number. Key sections:
- Section 2.26: TMRW Savings
- Section 2.27: UOB STASH
- Section 2.23: UOB ONE ACCOUNT
- Section 3.2: เงินฝากประจำทั่วไป (regular fixed deposits by term)

## UOB Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `uob-tmrw-savings` | `https://www.uob.co.th/personal/ebank/tmrw/products/accounts.page` |
| `uob-stash` | `https://www.uob.co.th/personal/deposits/savings-account/uob-stash.page` |
| `uob-one-account` | `https://www.uob.co.th/personal/deposits/savings-account/uob-one-account.page` |

**How to extract**: UOB savings product pages show rate tables inline. Look for "อัตราดอกเบี้ย" sections. TMRW and STASH pages show base rate + bonus rate tables clearly. ONE ACCOUNT has conditional bonus rates.

**What to look for**:
- Base (ปกติ) and bonus (โบนัส) rate columns
- Deposit amount tiers for bonus eligibility
- Conditions to receive bonus rate (e.g. maintaining average balance, transaction requirements)
- Effective date

**Fallback methods**:
1. Fetch the official rate PDF from the announcement page (see above)
2. Savings overview page: `https://www.uob.co.th/personal/deposits/savings-account.page`
3. Search for "UOB อัตราดอกเบี้ยเงินฝากออมทรัพย์"
4. Use browser rendering (`open_browser_page` + `read_page`) if `fetch_webpage` returns insufficient content

## UOB Fixed Deposits

All regular fixed deposits share a single product page.

| Product IDs | Fetch URL |
|-------------|-----------|
| `uob-fixed-3m`, `uob-fixed-6m`, `uob-fixed-12m`, `uob-fixed-24m`, `uob-fixed-36m` | `https://www.uob.co.th/personal/deposits/fixed/fixed-deposit-normal-fixed.page` |

**How to extract**: The product page describes terms and conditions but does **not** show the actual rate table inline. Rates must be obtained from the official rate PDF.

From the PDF, look for section "3.2 เงินฝากประจำทั่วไป" which shows rates by term (1-60 months) and deposit amount tier. For individual customers, the first column rate applies.

**What to look for in PDF**:
- Row per term length (เดือน)
- Rate columns: first column is for individual customers (บุคคลธรรมดา)
- Note: some terms may have different rates for deposits above/below 3 million baht

**Fallback methods**:
1. Fetch the official rate PDF from the announcement page
2. Fixed deposit overview page: `https://www.uob.co.th/personal/deposits/fixed-deposit.page`
3. Search for "UOB อัตราดอกเบี้ยเงินฝากประจำ"
4. Use browser rendering if needed
