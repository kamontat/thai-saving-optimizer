import type { SavingsProduct } from "../../models/types.ts";

export const ttbDreamSavings: SavingsProduct = {
	id: "ttb-dream-savings",
	type: "savings",
	name: "ttb Dream Savings",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.25,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-dream-savings",
	tags: ["digital"],
	description:
		"บัญชีออมทรัพย์พร้อมระบบตัดเงินอัตโนมัติรายเดือน สร้างวินัยการออมเพื่อทำทุกเป้าหมายเป็นจริง",
	conditions: [
		"ต้องไม่ใช่บัญชีที่เปิดร่วมกับผู้อื่น",
		"ผูกคู่กับบัญชีออมทรัพย์หรือกระแสรายวัน (บัญชีหลัก)",
		"หักเงินจากบัญชีหลักเป็นรายเดือนอัตโนมัติ ตั้งแต่ 500-25,000 บาท/เดือน",
		"ถอนเงินได้เฉพาะโอนไปบัญชีหลักที่ผูกคู่",
		"ไม่สามารถฝากเงินเข้าบัญชีโดยตรง",
		"ไม่สามารถใช้ร่วมกับบัตรเดบิต",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี ดรีม เซฟวิ่ง",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
};
