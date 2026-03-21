# CIMB Thai (CIMBT)

Base URL: `https://www.cimbthai.com/th/personal/products/accounts/`

CIMB Thai pages are JS-heavy (Adobe Experience Manager). Rate tables are rendered server-side within the product detail pages. The deposit interest rate overview page links to PDF announcements rather than inline tables.

## CIMB Thai Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `cimb-chill-d` | `https://www.cimbthai.com/th/personal/products/accounts/savings-account/chill-d-savings-by-cimb-thai-maximum-interest-at-2-aa.html` |
| `cimb-speed-d-plus` | `https://www.cimbthai.com/th/personal/products/accounts/savings-account/speed-d-plus-savings-by-cimb-thai.html` |
| `cimb-speed-savings` | `https://www.cimbthai.com/th/personal/products/accounts/savings-account/speed-savings.html` |
| `cimb-basic-banking` | Rate PDF (see fallback) |

**How to extract**: Rate tables appear inline on each product detail page as HTML tables with columns for balance tier and interest rate per annum.

**What to look for**:
- Chill D: Step-up rate table (ขั้นบันได) with 4 tiers by balance range
- Speed D Plus: Tier rate table (ยอดรวม) with "อัตราดอกเบี้ยปกติ" column (ignore bonus columns)
- Effective date note at the bottom of the rate table ("มีผลตั้งแต่วันที่...")

**Fallback methods**:
1. Deposit interest rate PDF announcements: `https://www.cimbthai.com/th/personal/help-support/rates-charges/deposit-interest-rates/deposit-rates-general-fdr.html`
2. Search for "CIMB Thai อัตราดอกเบี้ยเงินฝาก"

## CIMB Thai Fixed Deposits (Fixed D)

| Product IDs | Fetch URL |
|-------------|-----------|
| `cimb-fixed-d-3m`, `cimb-fixed-d-6m`, `cimb-fixed-d-9m`, `cimb-fixed-d-12m` | `https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/cimb-thai-e-fixed-deposit.html` |

**How to extract**: Rate table under "อัตราดอกเบี้ยต่อปี" section. Two sub-tables: "แผนปกติ" (regular plan) and "แคมเปญพิเศษ" (special campaign). Use the regular plan rates.

**What to look for**:
- Regular plan table: term (3/6/9/12 months) and rate columns
- Special campaign terms are time-limited promotions — track separately if needed
- Effective date note below each table

**Fallback methods**:
1. Deposit interest rate PDF announcements: `https://www.cimbthai.com/th/personal/help-support/rates-charges/deposit-interest-rates/deposit-rates-general-fdr.html`
2. Search for "CIMB Thai Fixed D อัตราดอกเบี้ย"

## CIMB Thai Fixed Deposits (Passbook)

| Product IDs | Fetch URL |
|-------------|-----------|
| `cimb-fixed-3m`, `cimb-fixed-6m`, `cimb-fixed-12m`, `cimb-fixed-24m`, `cimb-fixed-36m` | Rate PDF only |

**How to extract**: Rates are in the rate announcement PDF (item 9 "เงินฝากประจำประเภทสมุดคู่ฝาก"). PDF is image-based — use OCR or visual inspection.

## CIMB Thai Senior Fixed Deposit

| Product ID | Fetch URL |
|------------|-----------|
| `cimb-senior-fixed-12m` | `https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/senior-fixed-deposit.html` |

**How to extract**: Rate table under "อัตราดอกเบี้ย" section. Single rate for 12-month term.

## CIMB Thai Phemkha Sabai Jai (Monthly Savings)

| Product IDs | Fetch URL |
|-------------|-----------|
| `cimb-phemkha-sabai-jai-24m`, `cimb-phemkha-sabai-jai-36m` | Rate PDF only (item 15) |

**How to extract**: Rates are in the rate announcement PDF (item 15 "เงินฝากประจำเพิ่มค่าสบายใจ"). PDF is image-based.
