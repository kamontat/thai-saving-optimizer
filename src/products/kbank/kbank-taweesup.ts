import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.kasikornbank.com/th/personal/account/pages/taweesup.aspx";

export const kbankTaweesup: FixedDepositProduct = {
	id: "kbank-taweesup-24m",
	type: "fixed-deposit",
	termMonths: 24,
	name: "KBank เงินฝากทวีทรัพย์ 24 เดือน",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 1.75,
	minDeposit: 500,
	maxDeposit: 25_000,
	tiers: [{ min: 500, max: 25_000, rate: 1.75 }],
	url: baseUrl,
	tags: ["high-rate", "tax-free", "special-conditions"],
	description:
		"เงินฝากทวีทรัพย์ ฝากรายเดือน 500-25,000 บาท 24 เดือน ดอกเบี้ย 1.75% ต่อปี ได้รับยกเว้นภาษี",
	conditions: [
		"สำหรับบุคคลธรรมดาเท่านั้น",
		"ต้องฝากติดต่อกันทุกเดือนๆ ละ 1 ครั้ง จำนวนเงินเท่ากันทุกเดือน",
		"จำนวนเงินรับฝากต่อเดือน 500 - 25,000 บาท",
		"ระยะเวลาฝาก 24 เดือน",
		"ขาดฝาก 1-2 ครั้ง ยังได้ดอกเบี้ยตามอัตราทวีทรัพย์ และได้รับยกเว้นภาษี",
		"ขาดฝากตั้งแต่ครั้งที่ 3 ธนาคารไม่รับฝากเพิ่ม ได้ดอกเบี้ยเท่าอัตราต่ำสุดออมทรัพย์ พร้อมหักภาษี 15%",
		"ถอนก่อน 3 เดือน ธนาคารไม่จ่ายดอกเบี้ย",
		"ถอนตั้งแต่ 3 เดือนแต่ไม่ครบกำหนด ได้ดอกเบี้ยเท่าอัตราต่ำสุดออมทรัพย์ พร้อมหักภาษี 15%",
		"ดอกเบี้ยได้รับยกเว้นภาษีตามหลักเกณฑ์กรมสรรพากร",
	],
	metadata: {
		officialName: "เงินฝากทวีทรัพย์ 24 เดือน",
		productCategory: "เงินฝากประจำ",
		interestCalculation:
			"คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก (ฝากรายเดือนเท่ากันทุกเดือน)",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด 24 เดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 6 ม.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
