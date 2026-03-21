import type { SavingsProduct } from "../../models/types.ts";

export const kkpSmartGrowth: SavingsProduct = {
	id: "kkp-smart-growth",
	type: "savings",
	name: "KKP Smart Growth",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.5,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.25 },
		{ min: 100_000, max: 2_000_000, rate: 0.5 },
		{ min: 2_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-smart-growth",
	tags: ["special-conditions", "tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Smart Growth สำหรับผู้ถือหน่วยลงทุนกองทุน บลจ.เกียรตินาคินภัทร ดอกเบี้ยสูงสุด 0.50% ต่อปี",
	conditions: [
		"สำหรับบุคคลธรรมดาที่มีหน่วยลงทุนในกองทุน บลจ.เกียรตินาคินภัทร รวมกันไม่ต่ำกว่า 100,000 บาท",
		"ชื่อบัญชีต้องเป็นชื่อเดียวกับผู้ถือหน่วยลงทุน",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"ค่ารักษาบัญชี 50 บาท/เดือน กรณีบัญชีไม่เคลื่อนไหว 12 เดือน และยอดต่ำกว่า 1,000 บาท",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP SMART GROWTH",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes:
			"ต้องมีหน่วยลงทุนกองทุน บลจ.เกียรตินาคินภัทร >= 100,000 บาท อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
