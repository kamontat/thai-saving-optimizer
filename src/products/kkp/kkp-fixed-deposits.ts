import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit";
const baseConditions = [
	"เปิดบัญชีขั้นต่ำ 5,000 บาท ฝากครั้งต่อไปไม่น้อยกว่า 5,000 บาท/รายการ",
	"ถอนก่อนครบกำหนดต้องถอนเต็มจำนวนของยอดฝากแต่ละรายการ",
	"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
	"ถอนหลัง 3 เดือนแต่ไม่ครบกำหนดจะได้ดอกเบี้ยอัตราออมทรัพย์ทั่วไป ณ วันฝาก",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	insuranceNote: "เงินฝากนี้ได้รับการคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้",
	notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
};

export const kkpFixed3m: FixedDepositProduct = {
	id: "kkp-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "KKP Fixed Deposit 3 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.65,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 0.65 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 3 เดือน ดอกเบี้ยสูงสุด 0.65% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kkpFixed6m: FixedDepositProduct = {
	id: "kkp-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "KKP Fixed Deposit 6 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.8,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 0.8 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.65 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 6 เดือน ดอกเบี้ยสูงสุด 0.80% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kkpFixed9m: FixedDepositProduct = {
	id: "kkp-fixed-9m",
	type: "fixed-deposit",
	termMonths: 9,
	name: "KKP Fixed Deposit 9 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.0,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 1.0 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.85 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 9 เดือน ดอกเบี้ยสูงสุด 1.00% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 9 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const kkpFixed12m: FixedDepositProduct = {
	id: "kkp-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "KKP Fixed Deposit 12 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.0,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 1.0 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.85 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 12 เดือน ดอกเบี้ยสูงสุด 1.00% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 12 เดือน",
		payoutFrequency: "เลือกรับดอกเบี้ยราย 6 เดือน หรือเมื่อครบกำหนด",
	},
};

export const kkpFixed24m: FixedDepositProduct = {
	id: "kkp-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "KKP Fixed Deposit 24 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.9,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 0.9 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.75 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 24 เดือน ดอกเบี้ยสูงสุด 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 24 เดือน",
		payoutFrequency: "เลือกรับดอกเบี้ยราย 6 เดือน หรือเมื่อครบกำหนด",
	},
};

export const kkpFixed36m: FixedDepositProduct = {
	id: "kkp-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "KKP Fixed Deposit 36 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.9,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 100_000_000, rate: 0.9 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.75 },
	],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 36 เดือน ดอกเบี้ยสูงสุด 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 36 เดือน",
		payoutFrequency: "เลือกรับดอกเบี้ยราย 6 เดือน หรือเมื่อครบกำหนด",
	},
};
