import type { SavingsProduct } from "../../models/types.ts";

export const ttbNoFixed: SavingsProduct = {
	id: "ttb-no-fixed",
	type: "savings",
	name: "ttb No Fixed",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.45,
	tiers: [
		{ min: 0, max: 1_000_000, rate: 0.15 },
		{ min: 1_000_000, max: 5_000_000, rate: 1.15 },
		{ min: 5_000_000, max: 30_000_000, rate: 1.45 },
		{ min: 30_000_000, max: Number.POSITIVE_INFINITY, rate: 0.65 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-no-fixed",
	tags: ["digital", "no-min-deposit", "tiered"],
	description:
		"บัญชีออมทรัพย์ดอกเบี้ยสูง คำนวณดอกเบี้ยแบบขั้นบันได ถอนเมื่อไหร่ก็ได้ ไม่จำกัดวงเงินฝาก",
	conditions: [
		"ไม่มีขั้นต่ำในการเปิดบัญชีหรือฝากเพิ่ม",
		"ลูกค้า 1 ราย เปิดบัญชีได้เพียง 1 บัญชี (รวมเดี่ยวและร่วม)",
		"ถอนผ่านเคาน์เตอร์เกิน 2 ครั้ง/เดือน คิดค่าธรรมเนียม 50 บาท/รายการ",
		"ไม่สามารถใช้ร่วมกับบัตรเดบิต",
		"เปิดบัญชีผ่านแอป ttb touch หรือที่สาขา",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี โนฟิกซ์",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได",
		payoutFrequency: "จ่ายดอกเบี้ยทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
};
