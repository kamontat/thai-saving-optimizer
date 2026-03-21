import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.kasikornbank.com/th/personal/account/pages/fixed.aspx";
const baseConditions = [
	"เปิดบัญชีขั้นต่ำ 1,000 บาท",
	"จ่ายดอกเบี้ยเมื่อครบกำหนดระยะเวลาฝาก",
	"ถอนก่อนครบ 3 เดือน ธนาคารไม่จ่ายดอกเบี้ย",
	"ฝากครบ 3 เดือนขึ้นไป ถอนก่อนครบกำหนด ได้ดอกเบี้ยเท่าอัตราต่ำสุดออมทรัพย์",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ" as const,
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	insuranceNote:
		"เงินฝากนี้ได้รับความคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้ในกฎหมาย",
	notes: "อัตราดอกเบี้ยมีผล ณ 6 ม.ค. 2569",
};

export const kbankFixed3m: FixedDepositProduct = {
	id: "kbank-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "KBank Fixed Deposit 3 Months",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.6,
	minDeposit: 1_000,
	tiers: [
		{ min: 0, max: 10_000_000, rate: 0.6 },
		{ min: 10_000_000, max: Number.POSITIVE_INFINITY, rate: 0.65 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ KBank 3 เดือน ดอกเบี้ย 0.60% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kbankFixed6m: FixedDepositProduct = {
	id: "kbank-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "KBank Fixed Deposit 6 Months",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.7,
	minDeposit: 1_000,
	tiers: [
		{ min: 0, max: 10_000_000, rate: 0.7 },
		{ min: 10_000_000, max: Number.POSITIVE_INFINITY, rate: 0.75 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ KBank 6 เดือน ดอกเบี้ย 0.70% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kbankFixed12m: FixedDepositProduct = {
	id: "kbank-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "KBank Fixed Deposit 12 Months",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.8,
	minDeposit: 1_000,
	tiers: [
		{ min: 0, max: 10_000_000, rate: 0.8 },
		{ min: 10_000_000, max: Number.POSITIVE_INFINITY, rate: 0.85 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ KBank 12 เดือน ดอกเบี้ย 0.80% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kbankFixed24m: FixedDepositProduct = {
	id: "kbank-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "KBank Fixed Deposit 24 Months",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.9,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ KBank 24 เดือน ดอกเบี้ย 0.90% ต่อปี",
	conditions: [
		...baseConditions,
		"จ่ายดอกเบี้ยทุก 12 เดือน",
		"ต้องมีบัญชีออมทรัพย์หรือกระแสรายวันผูกรับดอกเบี้ย",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยทุก 12 เดือน",
	},
};

export const kbankFixed36m: FixedDepositProduct = {
	id: "kbank-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "KBank Fixed Deposit 36 Months",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.9,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ KBank 36 เดือน ดอกเบี้ย 0.90% ต่อปี",
	conditions: [
		...baseConditions,
		"จ่ายดอกเบี้ยทุก 12 เดือน",
		"ต้องมีบัญชีออมทรัพย์หรือกระแสรายวันผูกรับดอกเบี้ย",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 36 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยทุก 12 เดือน",
	},
};
