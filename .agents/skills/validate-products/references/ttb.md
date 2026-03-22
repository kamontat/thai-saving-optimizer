# TMBThanachart Bank (ttb)

Base URL: `https://www.ttbbank.com/th/personal/deposits/`

TTB's website is heavily JS-rendered. Rate tables are often loaded dynamically or displayed as images. Text extraction may not capture all rate data. Collapsed accordion sections require JavaScript interaction.

## ttb Savings Accounts

| Product ID | Fetch URL |
|------------|-----------|
| `ttb-no-fixed` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-no-fixed` |
| `ttb-me-save` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-me-save` |
| `ttb-dream-savings` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-dream-savings` |
| `ttb-savings-care` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-savings-care` |
| `ttb-the-exclusive-savings` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-the-exclusive-savings` |
| `ttb-all-free` | `https://www.ttbbank.com/th/personal/deposits/transactional-account/ttb-all-free` |
| `ttb-basic` | `https://www.ttbbank.com/th/personal/deposits/transactional-account/ttb-basic` |
| `ttb-puentarn` | `https://www.ttbbank.com/th/personal/deposits/transactional-account/puentarn` |

**How to extract**: Rate data for ttb-no-fixed is in a calculation example table on the page. ttb-me-save has a visible inline rate table. Other products have rates in collapsed accordion sections or as image files.

**What to look for**:
- Rate tables under "อัตราดอกเบี้ย" accordion sections
- Calculation example tables showing tier breakdown
- Image files in `media.ttbbank.com/1/deposit/` for rate table images
- Effective date in footer or notes

**Fallback methods**:
1. TTB deposit rate overview: `https://www.ttbbank.com/th/rates/deposit-rate`
2. Search for "ttb อัตราดอกเบี้ยเงินฝาก" for latest rate announcements
3. Bank of Thailand rate announcements

## ttb Fixed Deposits (Regular)

| Product IDs | Fetch URL |
|-------------|-----------|
| `ttb-fixed-3m`, `ttb-fixed-6m`, `ttb-fixed-12m`, `ttb-fixed-24m`, `ttb-fixed-36m` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-term-deposit` |

**How to extract**: Rates are in the "อัตราดอกเบี้ย" accordion section, often rendered dynamically.

## ttb Fixed Deposits (Up & Up)

| Product IDs | Fetch URL |
|-------------|-----------|
| `ttb-up-and-up-12m`, `ttb-up-and-up-24m` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-up-and-up` |

**How to extract**: Step-up rate table visible in "อัตราดอกเบี้ย" section with monthly rate breakdowns.

## ttb Fixed Deposits (Special)

| Product IDs | Fetch URL |
|-------------|-----------|
| `ttb-quick-interest-3m`, `ttb-quick-interest-12m` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-quick-interest` |
| `ttb-exclusive-9m` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-exclusive` |

## ttb Fixed Deposits (Plus, monthly interest)

| Product IDs | Fetch URL |
|-------------|-----------|
| `ttb-fixed-plus-4m`, `ttb-fixed-plus-7m`, `ttb-fixed-plus-12m`, `ttb-fixed-plus-18m` | `https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-term-deposit-plus` |

**How to extract**: Rates in "อัตราดอกเบี้ย" accordion section, may include multiple term options.
