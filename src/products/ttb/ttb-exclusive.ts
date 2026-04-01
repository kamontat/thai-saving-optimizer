import type { FixedDepositProduct } from "../../models/types.ts";

export const ttbExclusive9m: FixedDepositProduct = {
	id: "ttb-exclusive-9m",
	type: "fixed-deposit",
	termMonths: 9,
	name: "ttb Exclusive 9 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 1.1,
	minDeposit: 500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.1 }],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-exclusive",
	tags: [],
	description: "ฝากประจำระยะสั้น 9 เดือน ดอกเบี้ยสูงพิเศษ เปิดขั้นต่ำ 500,000 บาท",
	conditions: [
		"เปิดบัญชีครั้งแรกและฝากเพิ่มแต่ละครั้งขั้นต่ำ 500,000 บาท",
		"ยอดรวมทั้งเดี่ยวและร่วมไม่เกิน 200,000,000 บาท ต่อรายลูกค้า",
		"ถอนก่อนครบกำหนดต้องถอนทั้งจำนวน",
		"ไม่สามารถใช้เป็นหลักทรัพย์ค้ำประกันสินเชื่อ",
		"ต้องมีบัญชีออมทรัพย์หรือกระแสรายวันเพื่อรับดอกเบี้ยเมื่อครบกำหนด",
	],
	metadata: {
		officialName: "เงินฝากประจำ ทีทีบี เอ็กซ์คลูซีฟ 9 เดือน",
		productCategory: "เงินฝากประจำ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
