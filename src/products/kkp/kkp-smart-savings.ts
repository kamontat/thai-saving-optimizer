import type { SavingsProduct } from "../../models/types.ts";

export const kkpSmartSavings: SavingsProduct = {
	id: "kkp-smart-savings",
	type: "savings",
	name: "KKP Smart Savings",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.9,
	minDeposit: 100_000,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.25 },
		{ min: 100_000, max: 5_000_000, rate: 0.9 },
		{ min: 5_000_000, max: Number.POSITIVE_INFINITY, rate: 0.3 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-savings",
	tags: ["tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Smart Savings เปิดบัญชีขั้นต่ำ 100,000 บาท ดอกเบี้ยสูงสุด 0.90% ต่อปี",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 100,000 บาท",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"ค่ารักษาบัญชี 50 บาท/เดือน กรณีบัญชีไม่เคลื่อนไหว 12 เดือน และยอดต่ำกว่า 1,000 บาท",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SMART SAVINGS",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
