export const PRODUCT_TYPES = {
	savings: "Savings",
	"fixed-deposit": "Fixed Deposit",
	"long-term": "Long-term",
} as const;

export type ProductType = keyof typeof PRODUCT_TYPES;

export const BANK_NAMES = {
	kkp: "Kiatnakin Phatra (KKP)",
	cimbt: "CIMB Thai (CIMBT)",
	ttb: "TMBThanachart Bank (TTB)",
	scb: "Siam Commercial Bank (SCB)",
	kbank: "Kasikorn Bank (KBank)",
	uob: "United Overseas Bank (UOB)",
	tcb: "Thai Credit Bank (TCB)",
} as const;

export type BankId = keyof typeof BANK_NAMES;
export type BankName = (typeof BANK_NAMES)[BankId];

export const TAGS = {
	digital: "Digital",
	"high-rate": "High Rate",
	"no-min-deposit": "No Min Deposit",
	tiered: "Tiered",
	"special-conditions": "Special Conditions",
	"tax-free": "Tax Free",
	insurance: "Insurance",
	promotion: "Promotion",
	senior: "Senior",
} as const;

export type TagId = keyof typeof TAGS;
