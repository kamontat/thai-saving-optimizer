# Thai Credit Bank (TCB)

Base URL: `https://www.thaicreditbank.com`

The bank's website is heavily JavaScript-rendered. Interest rate tables on product pages are loaded dynamically and cannot be scraped with simple fetch. Use the **Product Catalog PDF** or the browser-based approach.

## TCB Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `tcb-savings` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-basic-banking` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-plus-account-one` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-plus-hi` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-plus-special` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-tem-krapuk` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-biz-plus` | `https://www.thaicreditbank.com/Page/45?lang=th` |
| `tcb-biz-defined` | `https://www.thaicreditbank.com/Page/45?lang=th` |

**How to extract**: Rate data is NOT rendered in the HTML. Use one of these approaches:

1. **Product Catalog PDF** (recommended): Navigate to any savings product page, expand "รายละเอียดผลิตภัณฑ์" accordion, and download the PDF named `Product_Catalog_ครั้งที่_X_XXXX_XXXXXXXX.pdf`
2. **Browser**: Open the homepage and look at the "อัตราดอกเบี้ยเงินฝาก" summary table for headline ranges

**What to look for**:
- Rate tiers per product on pages 4-8 of the Product Catalog PDF
- Effective date shown as "เริ่มใช้ตั้งแต่วันที่..." on the homepage rate table
- Each savings product has different tier structures (whole amount vs progressive)

**Fallback methods**:
1. Homepage rate summary table (only ranges, not tier details)
2. Product Catalog PDF from any product detail page
3. Search for "ธนาคารไทยเครดิต อัตราดอกเบี้ยเงินฝาก"

## TCB Fixed Deposits

| Product IDs | Fetch URL |
|-------------|-----------|
| `tcb-fixed-6m`, `tcb-fixed-8m`, `tcb-fixed-9m`, `tcb-fixed-12m`, `tcb-fixed-18m`, `tcb-fixed-24m`, `tcb-fixed-36m` | `https://www.thaicreditbank.com/Page/46?lang=th` |
| `tcb-fixed-tunjai-12m` | `https://www.thaicreditbank.com/Page/46?lang=th` |
| `tcb-happy-senior-12m` | `https://www.thaicreditbank.com/Page/46?lang=th` |

**How to extract**: Use Product Catalog PDF pages 9-11 for standard fixed deposits, Tunjai, and Happy Senior.

**Fallback methods**:
1. Product Catalog PDF
2. Homepage rate summary (only headline range "ประจำ X.XX - X.XX%")

## TCB Tax-Free Deposits

| Product IDs | Fetch URL |
|-------------|-----------|
| `tcb-tax-free-24m`, `tcb-tax-free-36m` | `https://www.thaicreditbank.com/th/info/47/16/บัญชีเงินฝากปลอดภาษี-Tax-Free-Account` |

**How to extract**: Use Product Catalog PDF page 12 for tax-free deposit rates.

**Fallback methods**:
1. Product Catalog PDF
2. Homepage rate summary (shows "ปลอดภาษี X.XX% - X.XX%")
