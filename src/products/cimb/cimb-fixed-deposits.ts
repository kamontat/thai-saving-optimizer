import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/fixed-deposit.html";

const baseConditions = [
	"สำหรับบุคคลธรรมดา สัญชาติไทย",
	"ประเภทสมุดคู่ฝาก เปิดบัญชีที่สาขาเท่านั้น",
	"เปิดบัญชีขั้นต่ำ 500,000 บาท (เฉพาะลูกค้าบุคคลธรรมดา)",
	"เลือกรับดอกเบี้ยรายเดือน หรือเมื่อครบกำหนด",
];

const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
};

export const cimbFixed3m: FixedDepositProduct = {
	id: "cimb-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "CIMB Thai Fixed Deposit 3 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.55,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.55 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำประเภทสมุดคู่ฝาก 3 เดือน ดอกเบี้ย 0.55% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำประเภทสมุดคู่ฝาก 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const cimbFixed6m: FixedDepositProduct = {
	id: "cimb-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "CIMB Thai Fixed Deposit 6 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.6,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.6 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำประเภทสมุดคู่ฝาก 6 เดือน ดอกเบี้ย 0.60% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำประเภทสมุดคู่ฝาก 6 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const cimbFixed12m: FixedDepositProduct = {
	id: "cimb-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "CIMB Thai Fixed Deposit 12 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.75,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำประเภทสมุดคู่ฝาก 12 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำประเภทสมุดคู่ฝาก 12 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const cimbFixed24m: FixedDepositProduct = {
	id: "cimb-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "CIMB Thai Fixed Deposit 24 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.75,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำประเภทสมุดคู่ฝาก 24 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำประเภทสมุดคู่ฝาก 24 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const cimbFixed36m: FixedDepositProduct = {
	id: "cimb-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "CIMB Thai Fixed Deposit 36 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.75,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำประเภทสมุดคู่ฝาก 36 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำประเภทสมุดคู่ฝาก 36 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};
