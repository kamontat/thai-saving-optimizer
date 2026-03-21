import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl = "https://www.thaicreditbank.com/Page/46?lang=th";

const baseConditions = [
	"สำหรับบุคคลธรรมดาและนิติบุคคล",
	"เปิดบัญชีขั้นต่ำ 1,000 บาท",
	"ประเภทสมุดคู่เงินฝาก (Passbook)",
	"ถอนก่อนครบกำหนดไม่ถึง 3 เดือน ไม่ได้รับดอกเบี้ย",
	"ถอนก่อนครบกำหนดตั้งแต่ 3 เดือนขึ้นไป จ่ายดอกเบี้ยออมทรัพย์ ณ วันที่ฝาก",
];

const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
};

export const tcbFixed6m: FixedDepositProduct = {
	id: "tcb-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "Thai Credit Fixed Deposit 6 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.35,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 6 เดือน ดอกเบี้ย 1.35% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 6 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const tcbFixed8m: FixedDepositProduct = {
	id: "tcb-fixed-8m",
	type: "fixed-deposit",
	termMonths: 8,
	name: "Thai Credit Fixed Deposit 8 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.35,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 8 เดือน ดอกเบี้ย 1.35% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 8 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const tcbFixed9m: FixedDepositProduct = {
	id: "tcb-fixed-9m",
	type: "fixed-deposit",
	termMonths: 9,
	name: "Thai Credit Fixed Deposit 9 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.4,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.4 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 9 เดือน ดอกเบี้ย 1.40% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 9 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
};

export const tcbFixed12m: FixedDepositProduct = {
	id: "tcb-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "Thai Credit Fixed Deposit 12 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.45,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.45 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 12 เดือน ดอกเบี้ย 1.45% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 12 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const tcbFixed18m: FixedDepositProduct = {
	id: "tcb-fixed-18m",
	type: "fixed-deposit",
	termMonths: 18,
	name: "Thai Credit Fixed Deposit 18 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.35,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 18 เดือน ดอกเบี้ย 1.35% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 18 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const tcbFixed24m: FixedDepositProduct = {
	id: "tcb-fixed-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "Thai Credit Fixed Deposit 24 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.35,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 24 เดือน ดอกเบี้ย 1.35% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 24 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};

export const tcbFixed36m: FixedDepositProduct = {
	id: "tcb-fixed-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "Thai Credit Fixed Deposit 36 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.35,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ 36 เดือน ดอกเบี้ย 1.35% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ 36 เดือน",
		payoutFrequency:
			"จ่ายดอกเบี้ยเมื่อครบกำหนด หรือเลือกรับดอกเบี้ยรายเดือน",
	},
};
