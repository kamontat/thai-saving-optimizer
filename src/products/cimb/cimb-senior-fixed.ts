import type { FixedDepositProduct } from "../../models/types.ts";

export const cimbSeniorFixed12m: FixedDepositProduct = {
	id: "cimb-senior-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "CIMB Thai Senior Fixed Deposit 12 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 0.75,
	minDeposit: 10_000,
	maxDeposit: 2_400_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: "https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/senior-fixed-deposit.html",
	tags: ["tax-free", "special-conditions"],
	description: "เงินฝากประจำซีเนียร์ สำหรับผู้สูงอายุ 55 ปีขึ้นไป ดอกเบี้ย 0.75% ต่อปี ปลอดภาษี",
	conditions: [
		"ไม่รับเปิดบัญชีใหม่ตั้งแต่วันที่ 1 มีนาคม 2569 เป็นต้นไป",
		"สำหรับบุคคลธรรมดาอายุ 55 ปีบริบูรณ์ขึ้นไป มีถิ่นที่อยู่ในประเทศไทย",
		"ฝากขั้นต่ำ 10,000 บาท สูงสุด 2,400,000 บาท",
		"ฝากได้ 1 รายการฝากเท่านั้น",
		"เปิดบัญชีได้ 1 บัญชีต่อท่าน",
		"ระยะเวลาฝาก 12 เดือน",
		"จ่ายดอกเบี้ยรายเดือน ปลอดภาษี",
	],
	metadata: {
		officialName: "เงินฝากประจำซีเนียร์",
		productCategory: "เงินฝากประจำ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
