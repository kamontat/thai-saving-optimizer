import type { SavingsProduct } from "../../models/types.ts";

export const kkpSmartBonus: SavingsProduct = {
	id: "kkp-smart-bonus",
	type: "savings",
	name: "KKP Smart Bonus",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.75,
	minDeposit: 1_000,
	tiers: [
		{ min: 0, max: 5_000_000, rate: 0.5 },
		{ min: 5_000_000, max: 10_000_000, rate: 0.65 },
		{ min: 10_000_000, max: 100_000_000, rate: 0.75 },
		{ min: 100_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-bonus",
	tags: ["tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Smart Bonus เหมาะสำหรับเงินฝากจำนวนมาก ดอกเบี้ยสูงสุด 0.75% ต่อปี",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 1,000 บาท",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"ค่ารักษาบัญชี 50 บาท/เดือน กรณีบัญชีไม่เคลื่อนไหว 12 เดือน และยอดต่ำกว่า 1,000 บาท",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SMART BONUS",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: "2026-03-24",
};
