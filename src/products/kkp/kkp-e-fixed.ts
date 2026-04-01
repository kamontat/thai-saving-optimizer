import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit";

export const kkpEFixed3m: FixedDepositProduct = {
	id: "kkp-e-fixed-3m",
	type: "fixed-deposit",
	termMonths: 3,
	name: "KKP e-Fixed 3 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.65,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.65 }],
	url: baseUrl,
	tags: ["digital"],
	description:
		"เงินฝากประจำแบบไม่มีสมุดคู่ฝาก 3 เดือน ดอกเบี้ย 0.65% ต่อปี ทำรายการผ่าน KKP e-Banking",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"ต้องสมัคร KKP e-Banking",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท ฝากครั้งต่อไปไม่น้อยกว่า 5,000 บาท/รายการ",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
		"ไม่สามารถใช้เป็นหลักประกันสินเชื่อได้",
	],
	metadata: {
		officialName: "เงินฝากประจำแบบไม่มีสมุดคู่ฝาก KKP e-Fixed 3 เดือน",
		productCategory: "เงินฝากประจำ (e-Fixed)",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const kkpEFixed6m: FixedDepositProduct = {
	id: "kkp-e-fixed-6m",
	type: "fixed-deposit",
	termMonths: 6,
	name: "KKP e-Fixed 6 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.8,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.8 }],
	url: baseUrl,
	tags: ["digital"],
	description:
		"เงินฝากประจำแบบไม่มีสมุดคู่ฝาก 6 เดือน ดอกเบี้ย 0.80% ต่อปี ทำรายการผ่าน KKP e-Banking",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"ต้องสมัคร KKP e-Banking",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท ฝากครั้งต่อไปไม่น้อยกว่า 5,000 บาท/รายการ",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
		"ไม่สามารถใช้เป็นหลักประกันสินเชื่อได้",
	],
	metadata: {
		officialName: "เงินฝากประจำแบบไม่มีสมุดคู่ฝาก KKP e-Fixed 6 เดือน",
		productCategory: "เงินฝากประจำ (e-Fixed)",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const kkpEFixed12m: FixedDepositProduct = {
	id: "kkp-e-fixed-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "KKP e-Fixed 12 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.0,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.0 }],
	url: baseUrl,
	tags: ["digital"],
	description:
		"เงินฝากประจำแบบไม่มีสมุดคู่ฝาก 12 เดือน ดอกเบี้ย 1.00% ต่อปี ทำรายการผ่าน KKP e-Banking",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"ต้องสมัคร KKP e-Banking",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท ฝากครั้งต่อไปไม่น้อยกว่า 5,000 บาท/รายการ",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
		"ไม่สามารถใช้เป็นหลักประกันสินเชื่อได้",
	],
	metadata: {
		officialName: "เงินฝากประจำแบบไม่มีสมุดคู่ฝาก KKP e-Fixed 12 เดือน",
		productCategory: "เงินฝากประจำ (e-Fixed)",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const kkpEFixedSpecial10m: FixedDepositProduct = {
	id: "kkp-e-fixed-special-10m",
	type: "fixed-deposit",
	termMonths: 10,
	name: "KKP e-Fixed Special 10 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.1,
	minDeposit: 5_000,
	maxDeposit: 200_000_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.1 }],
	url: baseUrl,
	tags: ["digital", "promotion"],
	description: "เงินฝากประจำพิเศษแบบไม่มีสมุดคู่ฝาก 10 เดือน ดอกเบี้ย 1.10% ต่อปี",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"ต้องสมัคร KKP e-Banking",
		"เปิดบัญชีขั้นต่ำ 5,000 บาท ยอดสูงสุดไม่เกิน 200 ล้านบาท",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
	],
	metadata: {
		officialName: "เงินฝากประจำพิเศษ 10 เดือน (KKP e-Fixed)",
		productCategory: "เงินฝากประจำ (e-Fixed)",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
		promotionEnd: "31 มีนาคม 2569",
		notes:
			"โครงการพิเศษ ตั้งแต่ 12 ม.ค. – 31 มี.ค. 2569 อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
