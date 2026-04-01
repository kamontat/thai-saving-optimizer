import type { SavingsProduct } from "../../models/types.ts";

export const cimbBasicBanking: SavingsProduct = {
	id: "cimb-basic-banking",
	type: "savings",
	name: "CIMB Thai Basic Banking",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.25,
	minDeposit: 0,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.25 }],
	url: "https://www.cimbthai.com/th/personal/products/accounts/savings-account/basic-banking-account.html",
	tags: ["no-min-deposit", "special-conditions"],
	description: "บัญชีเงินฝากพื้นฐาน สำหรับผู้ถือบัตรสวัสดิการแห่งรัฐ หรือบุคคลอายุ 65 ปีขึ้นไป",
	conditions: [
		"สำหรับผู้ถือบัตรสวัสดิการแห่งรัฐ หรือบุคคลธรรมดาอายุ 65 ปีบริบูรณ์ขึ้นไป",
		"ประเภทสมุดคู่ฝาก",
		"เปิดบัญชีขั้นต่ำ 0 บาท",
		"ไม่มีค่าธรรมเนียมรักษาบัญชี",
		"ยอดคงเหลือต่ำกว่า 500 บาท ธนาคารจะไม่จ่ายดอกเบี้ยในวันดังกล่าว",
		"บัญชีไม่เคลื่อนไหว 24 เดือน จะถูกเปลี่ยนสถานะเป็นบัญชีไม่เคลื่อนไหว",
	],
	metadata: {
		officialName: "บัญชีเงินฝากพื้นฐาน",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "จ่ายดอกเบี้ยปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
