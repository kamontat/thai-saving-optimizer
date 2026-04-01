import type { LongTermProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.cimbthai.com/th/personal/products/accounts/fixed-deposit-accounts/phemkha-sabai-jai-fixed-deposit.html";

const baseConditions = [
	"ไม่รับเปิดบัญชีใหม่ตั้งแต่วันที่ 1 มีนาคม 2569 เป็นต้นไป",
	"สำหรับบุคคลธรรมดาที่มีถิ่นที่อยู่ในประเทศไทย",
	"เปิดบัญชีได้คนละ 1 บัญชี (รวมเงินฝากประจำปลอดภาษีทุกประเภท)",
	"ฝากรายเดือนจำนวนเท่าๆ กัน ขั้นต่ำ 1,000 บาท สูงสุด 25,000 บาท ทวีคูณ 500 บาท",
	"อนุญาตให้ขาดฝากเกิน 2 เดือนติดต่อกันไม่ได้",
	"ปลอดภาษี",
];

const baseMetadata = {
	productCategory: "เงินฝากประจำ (ฝากรายเดือน)",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
	notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
};

export const cimbPhemkhaSabaiJai24m: LongTermProduct = {
	id: "cimb-phemkha-sabai-jai-24m",
	type: "long-term",
	termMonths: 24,
	name: "CIMB Thai Phemkha Sabai Jai 24 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 1.3,
	minDeposit: 1_000,
	maxDeposit: 25_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.3 }],
	url: baseUrl,
	tags: ["tax-free", "special-conditions"],
	description: "เงินฝากเพิ่มค่าสบายใจ 24 เดือน ฝากรายเดือน ดอกเบี้ย 1.30% ต่อปี ปลอดภาษี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำเพิ่มค่าสบายใจ 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: "2026-03-24",
};

export const cimbPhemkhaSabaiJai36m: LongTermProduct = {
	id: "cimb-phemkha-sabai-jai-36m",
	type: "long-term",
	termMonths: 36,
	name: "CIMB Thai Phemkha Sabai Jai 36 Months",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 1.3,
	minDeposit: 1_000,
	maxDeposit: 25_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.3 }],
	url: baseUrl,
	tags: ["tax-free", "special-conditions"],
	description: "เงินฝากเพิ่มค่าสบายใจ 36 เดือน ฝากรายเดือน ดอกเบี้ย 1.30% ต่อปี ปลอดภาษี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากประจำเพิ่มค่าสบายใจ 36 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: "2026-03-24",
};
