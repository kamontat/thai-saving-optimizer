import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-up-and-up";
const baseConditions = [
	"สามารถถอนก่อนกำหนดได้ โดยได้รับดอกเบี้ยตามระยะเวลาที่ฝาก",
	"ถอนก่อนครบกำหนดจะได้รับดอกเบี้ยอัตราออมทรัพย์ทั่วไป",
	"จ่ายดอกเบี้ยทุก 3 เดือน",
];
const baseMetadata = {
	productCategory: "เงินฝากประจำ",
	interestCalculation: "คำนวณดอกเบี้ยตามอัตราที่กำหนดในแต่ละช่วง แบบขั้นบันได (step-up)",
	notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
};

export const ttbUpAndUp12m: FixedDepositProduct = {
	id: "ttb-up-and-up-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "ttb Up & Up 12 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.75,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.75 }],
	url: baseUrl,
	tags: ["digital"],
	description: "ฝากประจำดอกเบี้ยขั้นบันได 12 เดือน ดอกเบี้ยเพิ่มทุก 3 เดือน เฉลี่ย 0.75% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากประจำ ทีทีบี อัพ แอนด์ อัพ 12 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยทุก 3 เดือน",
	},
	updatedAt: "2026-03-24",
};

export const ttbUpAndUp24m: FixedDepositProduct = {
	id: "ttb-up-and-up-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "ttb Up & Up 24 Months",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.9,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.9 }],
	url: baseUrl,
	tags: ["digital"],
	description: "ฝากประจำดอกเบี้ยขั้นบันได 24 เดือน ดอกเบี้ยเพิ่มทุก 6 เดือน เฉลี่ย 0.90% ต่อปี",
	conditions: baseConditions,
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากประจำ ทีทีบี อัพ แอนด์ อัพ 24 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยทุก 3 เดือน",
	},
	updatedAt: "2026-03-24",
};
