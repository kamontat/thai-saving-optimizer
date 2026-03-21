import type { SavingsProduct } from "../../models/types.ts";

export const cimbChillD: SavingsProduct = {
	id: "cimb-chill-d",
	type: "savings",
	name: "CIMB Thai Chill D",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 1.3,
	tiers: [
		{ min: 0, max: 10_000, rate: 0.5 },
		{ min: 10_000, max: 50_000, rate: 1.0 },
		{ min: 50_000, max: 100_000, rate: 1.3 },
		{ min: 100_000, max: Number.POSITIVE_INFINITY, rate: 0.2 },
	],
	url: "https://www.cimbthai.com/th/personal/products/accounts/savings-account/chill-d-savings-by-cimb-thai-maximum-interest-at-2-aa.html",
	tags: ["digital", "tiered", "special-conditions"],
	description:
		"บัญชีเงินฝากออมทรัพย์ชิลดี ซีไอเอ็มบี ไทย ดอกเบี้ยสูงสุด 1.30% ต่อปี คำนวณแบบขั้นบันได",
	conditions: [
		"ไม่เปิดรับคำขอเปิดบัญชีใหม่ตั้งแต่วันที่ 1 มีนาคม 2569 เป็นต้นไป",
		"สำหรับบุคคลธรรมดา สัญชาติไทย",
		"เปิดบัญชีผ่านแอป CIMB THAI เท่านั้น",
		"1 คน ต่อ 1 บัญชี ประเภทบัญชีเดี่ยว",
		"ไม่มีค่าธรรมเนียมรักษาบัญชี",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ชิลดี ซีไอเอ็มบี ไทย",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได (Step-up)",
		payoutFrequency: "จ่ายดอกเบี้ยปีละ 2 ครั้ง (มิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
	},
};
