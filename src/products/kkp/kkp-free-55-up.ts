import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit/kkp-free-55-up";

export const kkpFree55Up12m: FixedDepositProduct = {
	id: "kkp-free-55-up-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "KKP FREE 55 UP 12 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.5,
	minDeposit: 5_000,
	maxDeposit: 2_000_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.5 }],
	url: baseUrl,
	tags: ["tax-free", "senior"],
	description: "เงินฝากประจำปลอดภาษี KKP FREE 55 UP 12 เดือน ดอกเบี้ย 0.50% ต่อปี",
	conditions: [
		"สำหรับผู้มีอายุ 55 ปีขึ้นไป ณ วันเปิดบัญชี",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"ฝากได้สูงสุด 2 รายการ แต่ละรายการไม่เกิน 1,000,000 บาท",
		"ดอกเบี้ยรวมทุกบัญชีประจำปลอดภาษีเกิน 30,000 บาท/ปี จะเสียภาษี",
		"ถอนก่อนครบกำหนดจะไม่ได้รับดอกเบี้ย และอาจถูกเรียกคืนดอกเบี้ยที่จ่ายไปแล้ว",
	],
	metadata: {
		officialName: "เงินฝากประจำ KKP FREE 55 UP 12 เดือน",
		productCategory: "เงินฝากประจำปลอดภาษี",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes:
			"ปลอดภาษีดอกเบี้ยหากรวมทุกบัญชีไม่เกิน 30,000 บาท/ปี อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};

export const kkpFree55Up24m: FixedDepositProduct = {
	id: "kkp-free-55-up-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "KKP FREE 55 UP 24 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.55,
	minDeposit: 5_000,
	maxDeposit: 2_000_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.55 }],
	url: baseUrl,
	tags: ["tax-free", "senior"],
	description: "เงินฝากประจำปลอดภาษี KKP FREE 55 UP 24 เดือน ดอกเบี้ย 0.55% ต่อปี",
	conditions: [
		"สำหรับผู้มีอายุ 55 ปีขึ้นไป ณ วันเปิดบัญชี",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"ฝากได้สูงสุด 2 รายการ แต่ละรายการไม่เกิน 1,000,000 บาท",
		"ดอกเบี้ยรวมทุกบัญชีประจำปลอดภาษีเกิน 30,000 บาท/ปี จะเสียภาษี",
		"ถอนก่อนครบกำหนดจะไม่ได้รับดอกเบี้ย และอาจถูกเรียกคืนดอกเบี้ยที่จ่ายไปแล้ว",
	],
	metadata: {
		officialName: "เงินฝากประจำ KKP FREE 55 UP 24 เดือน",
		productCategory: "เงินฝากประจำปลอดภาษี",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes:
			"ปลอดภาษีดอกเบี้ยหากรวมทุกบัญชีไม่เกิน 30,000 บาท/ปี อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
