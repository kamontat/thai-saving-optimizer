import type { SavingsProduct } from "../models/types.ts";

export const cimbSpeedDPlus: SavingsProduct = {
	id: "cimb-speed-d-plus",
	type: "savings",
	name: "CIMB Thai Speed D+",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 1.1,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.25 },
		{ min: 100_000, max: 3_000_000, rate: 1.05 },
		{ min: 3_000_000, max: 20_000_000, rate: 1.1 },
		{ min: 20_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://www.cimbthai.com/th/personal/products/accounts/savings-account/speed-d-plus-savings-by-cimb-thai.html",
	tags: ["digital", "high-rate", "tiered"],
	description:
		"เงินฝากออมทรัพย์ สปีดดี พลัส ซีไอเอ็มบี ไทย ดอกเบี้ยสูงสุด 1.10% ต่อปี คำนวณแบบยอดรวม",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"เปิดบัญชีผ่านแอป CIMB THAI หรือสาขา",
		"1 คน ต่อ 1 บัญชี ประเภทบัญชีเดี่ยว",
		"ไม่มีสมุดคู่ฝาก ธนาคารจัดส่ง e-Statement ทุกวันที่ 1 ของเดือน",
		"ไม่สามารถขอบัตรเดบิตเพื่อทำธุรกรรมผ่านบัญชีนี้ได้",
	],
	metadata: {
		officialName: "เงินฝากออมทรัพย์ สปีดดี พลัส ซีไอเอ็มบี ไทย",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบยอดรวม (Tier Rate)",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
	},
};
