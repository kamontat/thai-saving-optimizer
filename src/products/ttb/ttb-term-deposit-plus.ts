import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-term-deposit-plus";
const baseConditions = [
	"ถอนก่อนครบกำหนดต้องถอนทั้งจำนวน",
	"ไม่สามารถใช้เป็นหลักประกันสินเชื่อ",
	"เมื่อครบกำหนดจะต่ออายุอัตโนมัติ",
	"ต้องมีบัญชีออมทรัพย์หรือกระแสรายวันเพื่อรับดอกเบี้ยรายเดือน",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
	notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
};

export const ttbFixedPlus4m: FixedDepositProduct = {
	id: "ttb-fixed-plus-4m",
	type: "fixed-deposit",
	termMonths: 4,
	name: "ttb Fixed Deposit Plus 4 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.65,
	minDeposit: 10_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.65 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ พลัส 4 เดือน ดอกเบี้ยสูงกว่าฝากประจำทั่วไป รับดอกเบี้ยรายเดือน",
	conditions: ["เปิดบัญชีครั้งแรกและฝากเพิ่มตั้งแต่ 10,000 บาท", ...baseConditions],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ พลัส 4 เดือน",
	},
	updatedAt: "2026-03-24",
};

export const ttbFixedPlus7m: FixedDepositProduct = {
	id: "ttb-fixed-plus-7m",
	type: "fixed-deposit",
	termMonths: 7,
	name: "ttb Fixed Deposit Plus 7 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.85,
	minDeposit: 10_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.85 }],
	url: baseUrl,
	tags: [],
	description: "เงินฝากประจำ พลัส 7 เดือน ดอกเบี้ยสูงกว่าฝากประจำทั่วไป รับดอกเบี้ยรายเดือน",
	conditions: ["เปิดบัญชีครั้งแรกและฝากเพิ่มตั้งแต่ 10,000 บาท", ...baseConditions],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ พลัส 7 เดือน",
	},
	updatedAt: "2026-03-24",
};

export const ttbFixedPlus12m: FixedDepositProduct = {
	id: "ttb-fixed-plus-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "ttb Fixed Deposit Plus 12 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.25,
	minDeposit: 100_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.25 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำ พลัส 12 เดือน ดอกเบี้ยสูงกว่าฝากประจำทั่วไป รับดอกเบี้ยรายเดือน",
	conditions: ["เปิดบัญชีครั้งแรกและฝากเพิ่มตั้งแต่ 100,000 บาท", ...baseConditions],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ พลัส 12 เดือน",
	},
	updatedAt: "2026-03-24",
};

export const ttbFixedPlus18m: FixedDepositProduct = {
	id: "ttb-fixed-plus-18m",
	type: "fixed-deposit",
	termMonths: 18,
	name: "ttb Fixed Deposit Plus 18 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.35,
	minDeposit: 10_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.35 }],
	url: baseUrl,
	tags: [],
	description:
		"เงินฝากประจำ พลัส 18 เดือน ดอกเบี้ยสูงกว่าฝากประจำทั่วไป รับดอกเบี้ยรายเดือน",
	conditions: ["เปิดบัญชีครั้งแรกและฝากเพิ่มตั้งแต่ 10,000 บาท", ...baseConditions],
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ พลัส 18 เดือน",
	},
	updatedAt: "2026-03-24",
};
