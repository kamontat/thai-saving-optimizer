import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.uob.co.th/personal/deposits/fixed/fixed-deposit-normal-fixed.page";
const baseConditions = [
	"เปิดบัญชีขั้นต่ำ 5,000 บาท",
	"ถอนก่อนครบกำหนด และระยะเวลาฝาก < 3 เดือน จะไม่ได้รับดอกเบี้ย",
	"ถอนก่อนครบกำหนด และระยะเวลาฝาก >= 3 เดือน ได้รับดอกเบี้ยออมทรัพย์ ณ ขณะนั้น",
	"เปิดได้ทั้งบุคคลธรรมดาและนิติบุคคล",
	"ฝากได้ทุกสาขา",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	insuranceNote: "เงินฝากนี้ได้รับการคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้",
	notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
};

export const uobFixed3m: FixedDepositProduct = {
	id: "uob-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "UOB Fixed Deposit 3 Months",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 0.7,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.7 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ UOB 3 เดือน ดอกเบี้ย 0.70% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชียูโอบี ฝากประจำ 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const uobFixed6m: FixedDepositProduct = {
	id: "uob-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "UOB Fixed Deposit 6 Months",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 0.75,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ UOB 6 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชียูโอบี ฝากประจำ 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const uobFixed12m: FixedDepositProduct = {
	id: "uob-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "UOB Fixed Deposit 12 Months",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 0.9,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ UOB 12 เดือน ดอกเบี้ย 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชียูโอบี ฝากประจำ 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือรายเดือน",
	},
	updatedAt: new Date("2026-03-24"),
};

export const uobFixed24m: FixedDepositProduct = {
	id: "uob-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "UOB Fixed Deposit 24 Months",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 0.9,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ UOB 24 เดือน ดอกเบี้ย 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชียูโอบี ฝากประจำ 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือรายปี",
	},
	updatedAt: new Date("2026-03-24"),
};

export const uobFixed36m: FixedDepositProduct = {
	id: "uob-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "UOB Fixed Deposit 36 Months",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 0.9,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ UOB 36 เดือน ดอกเบี้ย 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชียูโอบี ฝากประจำ 36 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือรายปี",
	},
	updatedAt: new Date("2026-03-24"),
};
