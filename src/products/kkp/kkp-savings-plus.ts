import type { SavingsProduct } from "../../models/types.ts";

export const kkpSavingsPlus: SavingsProduct = {
	id: "kkp-savings-plus",
	type: "savings",
	name: "KKP Savings Plus",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.25,
	minDeposit: 1_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.25 }],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-savings-plus",
	tags: [],
	description: "บัญชีออมทรัพย์ KKP Savings Plus บัญชีออมทรัพย์ทั่วไป ดอกเบี้ย 0.25% ต่อปี",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 1,000 บาท",
		"ผู้ฝาก 1 ราย เปิดได้สูงสุด 10 บัญชี",
		"ค่ารักษาบัญชี 50 บาท/เดือน กรณีบัญชีไม่เคลื่อนไหว 12 เดือน และยอดต่ำกว่า 1,000 บาท",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SAVINGS PLUS",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: "2026-03-24",
};
