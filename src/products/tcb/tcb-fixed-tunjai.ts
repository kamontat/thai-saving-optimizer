import type { FixedDepositProduct } from "../../models/types.ts";

export const tcbFixedTunjai12m: FixedDepositProduct = {
	id: "tcb-fixed-tunjai-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "Thai Credit Fixed Tunjai 12 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.6,
	minDeposit: 100_000,
	maxDeposit: 1_500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.6 }],
	url: "https://www.thaicreditbank.com/Page/46?lang=th",
	tags: ["high-rate"],
	description: "เงินฝากประจำทันใจ 12 เดือน ดอกเบี้ย 1.60% รับดอกเบี้ยทันที ณ วันฝาก",
	conditions: [
		"สำหรับบุคคลธรรมดาเท่านั้น",
		"เปิดบัญชีขั้นต่ำ 100,000 บาท สูงสุดต่อรายไม่เกิน 1,500,000 บาท",
		"จ่ายดอกเบี้ยทันทีเมื่อฝากด้วยเงินสด ณ วันที่เปิดบัญชีหรือฝากต่อ",
		"ถอนก่อนครบกำหนด จ่ายดอกเบี้ยออมทรัพย์ ณ วันที่ผิดเงื่อนไข",
		"ดอกเบี้ยที่จ่ายเกินไปจะหักคืนจากเงินต้น",
	],
	metadata: {
		officialName: "บัญชีเงินฝากประจำทันใจ",
		productCategory: "เงินฝากประจำ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ จ่ายดอกเบี้ยทันที ณ วันฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยทันที ณ วันฝาก (กรณีฝากด้วยเงินสด)",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
