import type { SavingsProduct } from "../../models/types.ts";

export const ttbMeSave: SavingsProduct = {
	id: "ttb-me-save",
	type: "savings",
	name: "ttb Me Save",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.8,
	tiers: [
		{ min: 0, max: 100_000, rate: 1.8 },
		{ min: 100_000, max: 1_000_000, rate: 1.2 },
		{ min: 1_000_000, max: Number.POSITIVE_INFINITY, rate: 1.0 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-me-save",
	tags: ["digital", "high-rate", "no-min-deposit", "tiered"],
	description: "บัญชีเงินฝากดิจิทัล ออมง่ายได้ดอกสูง ไม่ต้องฝากประจำ ดูดอกเบี้ยสะสมได้ทุกวัน",
	conditions: [
		"ลูกค้า 1 ราย เปิดบัญชีได้เพียง 1 บัญชี (ทุกสาขารวมกัน)",
		"ต้องไม่ใช่บัญชีร่วม",
		"รับดอกเบี้ยรวมโบนัสเมื่อมียอดเงินฝากมากกว่าถอนในแต่ละเดือน",
		"ฝาก-ถอนผ่านแอป ttb touch เท่านั้น",
		"ไม่สามารถใช้ร่วมกับบัตร ATM/Debit หรือ Direct Debit",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี มีเซฟ",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน (ก่อน 23:00 น.) แบบขั้นบันได",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
