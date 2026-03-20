import type { FixedDepositProduct } from "../models/types.ts";

const baseUrl =
	"https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit/kkp-tax-free";

export const kkpTaxFree24m: FixedDepositProduct = {
	id: "kkp-tax-free-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "KKP TAX FREE 24 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.8,
	minDeposit: 500,
	maxDeposit: 600_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.8 }],
	url: baseUrl,
	tags: ["tax-free", "high-rate"],
	description:
		"เงินฝากประจำปลอดภาษี KKP TAX FREE 24 เดือน ดอกเบี้ย 1.80% ต่อปี ฝากสูงสุด 25,000 บาท/เดือน",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชี ทุกระยะเวลาฝาก (นับรวมทุกธนาคาร)",
		"ฝากเงินติดต่อกันทุกเดือน เดือนละ 1 ครั้ง ยอดเท่ากันกับครั้งแรก",
		"ฝากสูงสุดไม่เกิน 25,000 บาท/เดือน (รวมสูงสุด 600,000 บาท)",
		"ขาดฝากเกิน 2 ครั้ง หรือถอนก่อนครบกำหนด จะปิดบัญชี",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย ถอนหลังนั้นได้ 0.25%/ปี",
	],
	metadata: {
		officialName: "เงินฝากประจำปลอดภาษี 24 เดือน",
		productCategory: "เงินฝากประจำปลอดภาษี",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ ฝากรายเดือนจำนวนเท่ากันทุกเดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};

export const kkpTaxFree36m: FixedDepositProduct = {
	id: "kkp-tax-free-36m",
	type: "fixed-deposit",
	termMonths: 36,
	name: "KKP TAX FREE 36 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.85,
	minDeposit: 500,
	maxDeposit: 594_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.85 }],
	url: baseUrl,
	tags: ["tax-free", "high-rate"],
	description:
		"เงินฝากประจำปลอดภาษี KKP TAX FREE 36 เดือน ดอกเบี้ย 1.85% ต่อปี ฝากสูงสุด 16,500 บาท/เดือน",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชี ทุกระยะเวลาฝาก (นับรวมทุกธนาคาร)",
		"ฝากเงินติดต่อกันทุกเดือน เดือนละ 1 ครั้ง ยอดเท่ากันกับครั้งแรก",
		"ฝากสูงสุดไม่เกิน 16,500 บาท/เดือน (รวมสูงสุด 594,000 บาท)",
		"ขาดฝากเกิน 2 ครั้ง หรือถอนก่อนครบกำหนด จะปิดบัญชี",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย ถอนหลังนั้นได้ 0.25%/ปี",
	],
	metadata: {
		officialName: "เงินฝากประจำปลอดภาษี 36 เดือน",
		productCategory: "เงินฝากประจำปลอดภาษี",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ ฝากรายเดือนจำนวนเท่ากันทุกเดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
};
