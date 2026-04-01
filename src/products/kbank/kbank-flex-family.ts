import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.kasikornbank.com/th/personal/account/pages/flexible-plus-family-protection.aspx";

export const kbankFlexFamily: FixedDepositProduct = {
	id: "kbank-flex-family",
	type: "fixed-deposit",
	termMonths: 9,
	name: "KBank คล่องตัว ครอบครัวอุ่นใจ",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 0.75,
	minDeposit: 9_000,
	maxDeposit: 1_000_000,
	tiers: [{ min: 9_000, max: 1_000_000, rate: 0.75 }],
	url: baseUrl,
	tags: ["insurance", "special-conditions"],
	description:
		"เงินฝากคล่องตัว ครอบครัวอุ่นใจ ดอกเบี้ย 0.75% ต่อปี ระยะเวลา 9 เดือน พร้อมประกันอุบัติเหตุ",
	conditions: [
		"สำหรับบุคคลธรรมดา เปิดบัญชีในนามผู้ฝากคนเดียวเท่านั้น",
		"วงเงินรับฝาก 9,000 - 1,000,000 บาทต่อราย (รวมทุกบัญชีย่อย)",
		"วงเงินเกิน 1,000,000 บาท ธนาคารสงวนสิทธิ์ไม่จ่ายดอกเบี้ยส่วนเกิน",
		"ถอนก่อน 3 เดือน ได้ดอกเบี้ยเท่าอัตราต่ำสุดเงินฝากประจำ 3 เดือน",
		"ถอนตั้งแต่ 3 เดือนแต่ไม่ครบกำหนด ได้ดอกเบี้ยเท่าอัตราต่ำสุดเงินฝากประจำ 6 เดือน",
		"ผู้ฝากได้รับประกันภัยอุบัติเหตุส่วนบุคคล (อายุ 16-70 ปี)",
		"วงเงินคุ้มครองประกัน 2 เท่าของยอดเงินฝาก สูงสุดไม่เกิน 1,000,000 บาท",
	],
	metadata: {
		officialName: "เงินฝากคล่องตัว ครอบครัวอุ่นใจ",
		productCategory: "เงินฝากประจำ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก 9 เดือน",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด 9 เดือน",
		insuranceNote:
			"แถมประกันอุบัติเหตุส่วนบุคคล วงเงินคุ้มครอง 2 เท่าของยอดเงินฝาก (สูงสุด 1,000,000 บาท) โดย บมจ.เมืองไทยประกันภัย",
		notes: "อัตราดอกเบี้ยมีผล ณ 6 ม.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
