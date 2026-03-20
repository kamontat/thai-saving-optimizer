import type { SavingsProduct } from "../models/types.ts";

export const kkpSmartSettlement: SavingsProduct = {
	id: "kkp-smart-settlement",
	type: "savings",
	name: "KKP Smart Settlement",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.3,
	tiers: [
		{ min: 0, max: 1_000_000, rate: 0.6 },
		{ min: 1_000_000, max: 10_000_000, rate: 0.8 },
		{ min: 10_000_000, max: 50_000_000, rate: 1.2 },
		{ min: 50_000_000, max: 200_000_000, rate: 1.3 },
		{ min: 200_000_000, max: 500_000_000, rate: 0.5 },
		{ min: 500_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-settlement",
	tags: ["special-conditions", "tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Smart Settlement สำหรับลูกค้าซื้อขายหลักทรัพย์ ดอกเบี้ยสูงสุด 1.30% ต่อปี",
	conditions: [
		"สำหรับลูกค้าที่เปิดบัญชีซื้อขายหลักทรัพย์กับ บล.เกียรตินาคินภัทร เท่านั้น",
		"ชื่อบัญชีต้องเป็นชื่อเดียวกับเจ้าของบัญชีหลักทรัพย์",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"ไม่มีค่ารักษาบัญชี (กรณีไม่เคลื่อนไหว 60 เดือน และยอดต่ำกว่า 1,000 บาท)",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SMART SETTLEMENT",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "ต้องมีบัญชีซื้อขายหลักทรัพย์กับ บล.เกียรตินาคินภัทร อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
