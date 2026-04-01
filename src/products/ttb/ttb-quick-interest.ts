import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-quick-interest";
const baseConditions = [
	"เปิดบัญชีครั้งแรกขั้นต่ำ 10,000 บาท ฝากเพิ่มครั้งถัดไปตั้งแต่ 10,000 บาท",
	"ยอดรวมทั้งเดี่ยวและร่วมไม่เกิน 200,000,000 บาท ต่อรายลูกค้า",
	"รับดอกเบี้ยทั้งก้อนภายใน 7 วันนับจากวันที่ฝาก",
	"ถอนก่อนครบกำหนดต้องถอนทั้งจำนวน",
	"ไม่สามารถใช้เป็นหลักทรัพย์ค้ำประกันสินเชื่อ",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ จ่ายล่วงหน้าใน 7 วัน",
	notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
};

export const ttbQuickInterest3m: FixedDepositProduct = {
	id: "ttb-quick-interest-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "ttb Quick Interest 3 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.45,
	minDeposit: 10_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.45 }],
	url: baseUrl,
	tags: [],
	description: "ฝากประจำ 3 เดือน รับดอกเบี้ยทั้งก้อนภายใน 7 วัน ไม่ต้องรอครบกำหนด",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ ทีทีบี ดอกเบี้ยด่วน 3 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยภายใน 7 วันหลังฝาก",
	},
	updatedAt: "2026-03-24",
};

export const ttbQuickInterest12m: FixedDepositProduct = {
	id: "ttb-quick-interest-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "ttb Quick Interest 12 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.95,
	minDeposit: 10_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.95 }],
	url: baseUrl,
	tags: [],
	description: "ฝากประจำ 12 เดือน รับดอกเบี้ยทั้งก้อนภายใน 7 วัน ไม่ต้องรอครบกำหนด",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำ ทีทีบี ดอกเบี้ยด่วน 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยภายใน 7 วันหลังฝาก",
	},
	updatedAt: "2026-03-24",
};
