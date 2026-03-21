# CIMB Thai (CIMBT)

Base URL: `https://www.cimbthai.com/th/personal/products/accounts/`

CIMB Thai pages are JS-heavy (Adobe Experience Manager). Rate tables are rendered server-side within the product detail pages. The deposit interest rate overview page links to PDF announcements rather than inline tables.

## CIMB Thai Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `cimb-chill-d` | `https://www.cimbthai.com/th/personal/products/accounts/savings-account/chill-d-savings-by-cimb-thai-maximum-interest-at-2-aa.html` |
| `cimb-speed-d-plus` | `https://www.cimbthai.com/th/personal/products/accounts/savings-account/speed-d-plus-savings-by-cimb-thai.html` |

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
