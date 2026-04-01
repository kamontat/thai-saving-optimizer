import type { LongTermProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.thaicreditbank.com/th/info/47/16/%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5-Tax-Free-Account";

const baseConditions = [
	"สำหรับบุคคลธรรมดาเท่านั้น",
	"เปิดบัญชีปลอดภาษีได้เพียง 1 บัญชีต่อ 1 ท่าน (รวมกันทุกธนาคาร)",
	"ฝากรายเดือนจำนวนเท่าๆ กัน ด้วยจำนวนเท่ากับการเปิดบัญชีครั้งแรก",
	"ยอดเงินฝากรวมเมื่อครบกำหนดต้องไม่เกิน 600,000 บาท",
	"ขาดฝากไม่เกิน 2 ครั้ง จึงจะได้รับยกเว้นภาษี",
	"ขาดฝากเกิน 2 ครั้ง ได้รับดอกเบี้ยปลอดภาษีแต่หักภาษี ณ ที่จ่าย",
	"ถอนก่อนครบกำหนดไม่ถึง 3 เดือน ไม่ได้รับดอกเบี้ย",
	"ถอนก่อนครบกำหนดตั้งแต่ 3 เดือนขึ้นไป จ่ายดอกเบี้ยออมทรัพย์ ณ วันที่เปิดบัญชี",
];

const baseMetadata = {
	productCategory: "เงินฝากปลอดภาษี",
	interestCalculation: "คำนวณดอกเบี้ยแบบไม่ทบต้น อัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
};

export const tcbTaxFree24m: LongTermProduct = {
	id: "tcb-tax-free-24m",
	type: "long-term",
	termMonths: 24,
	name: "Thai Credit Tax Free 24 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 2.0,
	minDeposit: 1_000,
	maxDeposit: 25_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 2.0 }],
	url: baseUrl,
	tags: ["tax-free", "high-rate"],
	description: "เงินฝากปลอดภาษี 24 เดือน ฝากรายเดือน ดอกเบี้ย 2.00% ต่อปี ยกเว้นภาษี",
	conditions: [...baseConditions, "จำนวนเงินฝากต่อเดือน 1,000 - 25,000 บาท"],
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากปลอดภาษี 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด 24 งวด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbTaxFree36m: LongTermProduct = {
	id: "tcb-tax-free-36m",
	type: "long-term",
	termMonths: 36,
	name: "Thai Credit Tax Free 36 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 2.1,
	minDeposit: 1_000,
	maxDeposit: 16_500,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 2.1 }],
	url: baseUrl,
	tags: ["tax-free", "high-rate"],
	description: "เงินฝากปลอดภาษี 36 เดือน ฝากรายเดือน ดอกเบี้ย 2.10% ต่อปี ยกเว้นภาษี",
	conditions: [...baseConditions, "จำนวนเงินฝากต่อเดือน 1,000 - 16,500 บาท"],
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากปลอดภาษี 36 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด 36 งวด",
	},
	updatedAt: new Date("2026-03-24"),
};
