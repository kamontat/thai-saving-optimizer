import type { SavingsProduct } from "../../models/types.ts";

export const kkpSavvy: SavingsProduct = {
	id: "kkp-savvy",
	type: "savings",
	name: "KKP Savvy",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.45,
	tiers: [
		{ min: 0, max: 10_000, rate: 0.5 },
		{ min: 10_000, max: 200_000, rate: 1.3 },
		{ min: 200_000, max: 2_000_000, rate: 1.4 },
		{ min: 2_000_000, max: 5_000_000, rate: 1.45 },
		{ min: 5_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-savvy",
	tags: ["digital", "no-min-deposit", "tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Savvy เปิดผ่านแอป KKP Better ให้ดอกเบี้ยสูงสุด 1.45% ต่อปี",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 12 ปีขึ้นไป",
		"เปิดบัญชีผ่านแอป KKP Better เท่านั้น",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"บัญชีไม่เคลื่อนไหว 90 วัน อาจถูกปิดอัตโนมัติ",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SAVVY",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
