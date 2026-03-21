import type { SavingsProduct } from "../../models/types.ts";

export const dimeSave: SavingsProduct = {
	id: "dime-save",
	type: "savings",
	name: "Dime Save",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 3.0,
	tiers: [
		{ min: 0, max: 10_000, rate: 3.0 },
		{ min: 10_000, max: 500_000, rate: 1.2 },
		{ min: 500_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/dime-save",
	tags: ["digital", "high-rate", "no-min-deposit", "tiered"],
	description:
		"บัญชีออมทรัพย์ Dime! Save เปิดผ่านแอป Dime! ให้ดอกเบี้ยสูงสุด 3.00% ต่อปี สำหรับ 10,000 บาทแรก",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 20 ปีขึ้นไป",
		"เปิดบัญชีผ่านแอป Dime! เท่านั้น",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"บัญชีไม่เคลื่อนไหว 90 วัน อาจถูกปิดอัตโนมัติ",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ Dime! Save",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes:
			"อัตราดอกเบี้ยมีผลวันที่ 1 กุมภาพันธ์ 2569 เป็นต้นไป อัตราดอกเบี้ยจากข้อมูล ณ 27 ก.พ. 2569",
	},
};
