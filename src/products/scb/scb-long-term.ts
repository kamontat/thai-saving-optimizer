import type { LongTermProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.scb.co.th/th/personal-banking/deposits/long-term-deposit-accounts";
const baseConditions = [
	"เฉพาะบุคคลธรรมดา",
	"ฝากเท่ากันทุกเดือน ขั้นต่ำ 500 บาท (ส่วนเพิ่มขั้นละ 500 บาท)",
	"ฝากได้เดือนละ 1 ครั้ง สูงสุดไม่เกิน 25,000 บาท/เดือน",
	"ขาดฝากเกิน 2 ครั้ง หรือถอนก่อนครบกำหนด จะปิดบัญชี",
	"ยกเว้นภาษีดอกเบี้ยเงินฝาก",
];
const baseMetadata = {
	productCategory: "เงินฝากระยะยาว",
	interestCalculation:
		"คำนวณดอกเบี้ยจากยอดคงเหลือประจำวัน ทบดอกเบี้ยเป็นเงินต้นทุก 6 เดือน",
	insuranceNote: "เงินฝากนี้ได้รับการคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้",
	notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
};

export const scbBonus24m: LongTermProduct = {
	id: "scb-bonus-24m",
	type: "long-term",
	termMonths: 24,
	name: "SCB Bonus 24 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 1.8,
	minDeposit: 500,
	maxDeposit: 600_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.8 }],
	url: `${baseUrl}/bonus-fixed-account-24-months.html`,
	tags: ["tax-free", "high-rate", "digital"],
	description:
		"บัญชีเงินฝากโบนัส/ระยะยาว 24 เดือน (E-Passbook) ดอกเบี้ย 1.80% ต่อปี ยกเว้นภาษี ฝากเดือนละ 500-25,000 บาท",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากโบนัส / เงินฝากระยะยาว 24 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};

export const scbBonus36m: LongTermProduct = {
	id: "scb-bonus-36m",
	type: "long-term",
	termMonths: 36,
	name: "SCB Bonus 36 Months",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 2.05,
	minDeposit: 500,
	maxDeposit: 900_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 2.05 }],
	url: `${baseUrl}/bonus-fixed-account-36-months.html`,
	tags: ["tax-free", "high-rate", "digital"],
	description:
		"บัญชีเงินฝากโบนัส/ระยะยาว 36 เดือน (E-Passbook) ดอกเบี้ย 2.05% ต่อปี ยกเว้นภาษี ฝากเดือนละ 500-25,000 บาท",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "เงินฝากโบนัส / เงินฝากระยะยาว 36 เดือน (E-Passbook)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด",
	},
	updatedAt: new Date("2026-03-24"),
};
