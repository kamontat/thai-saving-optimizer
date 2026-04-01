import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.scb.co.th/th/personal-banking/deposits/fixed-deposit-account/fixed-deposit-account.html";
const baseConditions = [
	"เปิดบัญชีแบบ E-Passbook ไม่มีสมุดคู่ฝาก",
	"ถอนก่อนครบกำหนดต้องถอนเต็มจำนวนของยอดฝากแต่ละรายการ",
	"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	insuranceNote: "เงินฝากนี้ได้รับการคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้",
	notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
};

export const scbFixed3m: FixedDepositProduct = {
	id: "scb-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "SCB Fixed Deposit 3 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 0.75,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำ SCB 3 เดือน (E-Passbook) ดอกเบี้ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 3 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const scbFixed6m: FixedDepositProduct = {
	id: "scb-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "SCB Fixed Deposit 6 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 0.85,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.85 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำ SCB 6 เดือน (E-Passbook) ดอกเบี้ย 0.85% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 6 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const scbFixed12m: FixedDepositProduct = {
	id: "scb-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "SCB Fixed Deposit 12 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 0.95,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.95 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำ SCB 12 เดือน (E-Passbook) ดอกเบี้ย 0.95% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 12 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const scbFixed24m: FixedDepositProduct = {
	id: "scb-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "SCB Fixed Deposit 24 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 1.0,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.0 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำ SCB 24 เดือน (E-Passbook) ดอกเบี้ย 1.00% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 24 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const scbFixed36m: FixedDepositProduct = {
	id: "scb-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "SCB Fixed Deposit 36 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 1.0,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.0 }],
	url: baseUrl,
	tags: ["digital"],
	description: "เงินฝากประจำ SCB 36 เดือน (E-Passbook) ดอกเบี้ย 1.00% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 36 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};
