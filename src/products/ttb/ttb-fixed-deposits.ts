import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-term-deposit";
const baseConditions = [
	"เปิดบัญชีครั้งแรกขั้นต่ำ 1,000 บาท ฝากเพิ่มครั้งถัดไปตั้งแต่ 1,000 บาท",
	"เมื่อครบกำหนดจะต่ออายุอัตโนมัติ",
	"ถอนก่อนครบกำหนดจะได้รับดอกเบี้ยอัตราออมทรัพย์ทั่วไป",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
};

export const ttbFixed3m: FixedDepositProduct = {
	id: "ttb-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "ttb Fixed Deposit 3 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.55,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.55 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ ttb 3 เดือน ดอกเบี้ย 0.55% ต่อปี",
	conditions: [
		...baseConditions,
		"บัญชี 3 เดือน สามารถถอนเพียงบางส่วนได้",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำทั่วไป 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const ttbFixed6m: FixedDepositProduct = {
	id: "ttb-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "ttb Fixed Deposit 6 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.75,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ ttb 6 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: [
		...baseConditions,
		"บัญชี 6 เดือน สามารถถอนเพียงบางส่วนได้",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำทั่วไป 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const ttbFixed12m: FixedDepositProduct = {
	id: "ttb-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "ttb Fixed Deposit 12 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.15,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.15 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ ttb 12 เดือน ดอกเบี้ย 1.15% ต่อปี",
	conditions: [
		...baseConditions,
		"บัญชี 12 เดือน สามารถถอนเพียงบางส่วนได้",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำทั่วไป 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const ttbFixed24m: FixedDepositProduct = {
	id: "ttb-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "ttb Fixed Deposit 24 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.15,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.15 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ ttb 24 เดือน ดอกเบี้ย 1.15% ต่อปี",
	conditions: [
		...baseConditions,
		"บัญชี 24 เดือน ต้องถอนเต็มจำนวนของแต่ละรายการฝาก",
		"ไม่สามารถใช้เป็นหลักทรัพย์ค้ำประกันสินเชื่อ",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำทั่วไป 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const ttbFixed36m: FixedDepositProduct = {
	id: "ttb-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "ttb Fixed Deposit 36 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.15,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.15 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ ttb 36 เดือน ดอกเบี้ย 1.15% ต่อปี",
	conditions: [
		...baseConditions,
		"บัญชี 36 เดือน ต้องถอนเต็มจำนวนของแต่ละรายการฝาก",
		"ไม่สามารถใช้เป็นหลักทรัพย์ค้ำประกันสินเชื่อ",
	],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำทั่วไป 36 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};
