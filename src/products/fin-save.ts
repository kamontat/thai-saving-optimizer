import type { SavingsProduct } from "../models/types.ts";

export const finSave: SavingsProduct = {
	id: "fin-save",
	type: "savings",
	name: "FIN SAVE by KKP",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.6,
	tiers: [
		{ min: 0, max: 500_000, rate: 0.4 },
		{ min: 500_000, max: 2_000_000, rate: 1.6 },
		{ min: 2_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/fin-save-by-kkp",
	tags: ["digital", "high-rate", "no-min-deposit", "tiered"],
	description:
		"บัญชีออมทรัพย์ FIN SAVE by KKP เปิดผ่านแอป Finnomena ให้ดอกเบี้ยสูงสุด 1.60% ต่อปี",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 20 ปีขึ้นไป",
		"เปิดบัญชีผ่านแอป Finnomena เท่านั้น",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"บัญชีไม่เคลื่อนไหว 90 วัน อาจถูกปิดอัตโนมัติ",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ FIN SAVE by KKP",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
