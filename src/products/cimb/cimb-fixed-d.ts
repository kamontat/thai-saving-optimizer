import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/cimb-thai-e-fixed-deposit.html";

const baseConditions = [
	"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
	"เปิดบัญชีขั้นต่ำ 1,000 บาท",
	"ต้องมีบัญชีเงินฝากออมทรัพย์หรือกระแสรายวันของ CIMB Thai ก่อนเปิดบัญชี",
	"ทำธุรกรรมผ่านแอป CIMB THAI เท่านั้น",
	"ไม่มีสมุดคู่ฝาก ธนาคารจัดส่ง e-Statement ทุกวันที่ 1 ของเดือน",
	"เปิดบัญชีได้สูงสุดคนละ 3 บัญชี แต่ละบัญชีเปิดแผนเงินฝากได้ไม่จำกัด",
];

const baseMetadata = {
	productCategory: "เงินฝากประจำ (ดิจิทัล)",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
};

export const cimbFixedD3m: FixedDepositProduct = {
	id: "cimb-fixed-d-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "CIMB Thai Fixed D 3 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.55,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.55 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำดิจิทัล Fixed D ซีไอเอ็มบี ไทย 3 เดือน ดอกเบี้ย 0.55% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำดิจิทัล Fixed D 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const cimbFixedD6m: FixedDepositProduct = {
	id: "cimb-fixed-d-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "CIMB Thai Fixed D 6 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.6,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.6 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำดิจิทัล Fixed D ซีไอเอ็มบี ไทย 6 เดือน ดอกเบี้ย 0.60% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำดิจิทัล Fixed D 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const cimbFixedD9m: FixedDepositProduct = {
	id: "cimb-fixed-d-9m",
	type: "fixed-deposit",
	termMonths: 9,
	name: "CIMB Thai Fixed D 9 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.6,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.6 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำดิจิทัล Fixed D ซีไอเอ็มบี ไทย 9 เดือน ดอกเบี้ย 0.60% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำดิจิทัล Fixed D 9 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const cimbFixedD12m: FixedDepositProduct = {
	id: "cimb-fixed-d-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "CIMB Thai Fixed D 12 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.75,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำดิจิทัล Fixed D ซีไอเอ็มบี ไทย 12 เดือน ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำดิจิทัล Fixed D 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};
