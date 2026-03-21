import type { SavingsProduct } from "../../models/types.ts";

export const kkpCurrentPlus: SavingsProduct = {
	id: "kkp-current-plus",
	type: "savings",
	name: "KKP Current Plus",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.5,
	tiers: [
		{ min: 0, max: 500_000, rate: 0.25 },
		{ min: 500_000, max: 1_000_000, rate: 0.25 },
		{ min: 1_000_000, max: 10_000_000, rate: 0.5 },
		{ min: 10_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/current-account",
	tags: ["special-conditions", "tiered"],
	description:
		"บัญชีกระแสรายวันพิเศษ KKP Current Plus สำหรับลูกค้า Custodian ดอกเบี้ยสูงสุด 0.50% ต่อปี",
	conditions: [
		"สำหรับลูกค้าที่ใช้บริการผู้รับฝากทรัพย์สิน (Custodian) กับธนาคารเท่านั้น",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"ไม่มีค่ารักษาบัญชี (กรณีไม่เคลื่อนไหว 12 เดือน และยอดต่ำกว่า 1,000 บาท)",
	],
	metadata: {
		officialName: "บัญชีเงินฝากกระแสรายวันพิเศษ KKP CURRENT PLUS",
		productCategory: "เงินฝากกระแสรายวัน",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "ต้องใช้บริการ Custodian กับธนาคาร อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
