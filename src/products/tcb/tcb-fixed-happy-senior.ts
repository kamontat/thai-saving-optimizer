import type { FixedDepositProduct } from "../../models/types.ts";

export const tcbHappySenior12m: FixedDepositProduct = {
	id: "tcb-happy-senior-12m",
	type: "fixed-deposit",
	termMonths: 12,
	name: "Thai Credit Happy Senior 12 Months",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.5,
	minDeposit: 10_000,
	maxDeposit: 1_500_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.5 }],
	url: "https://www.thaicreditbank.com/Page/46?lang=th",
	tags: ["tax-free", "special-conditions"],
	description:
		"เงินฝากประจำแฮปปี ซีเนียร์ 12 เดือน สำหรับผู้มีอายุ 55 ปีขึ้นไป ดอกเบี้ย 1.50% ยกเว้นภาษี",
	conditions: [
		"สำหรับบุคคลธรรมดา อายุตั้งแต่ 55 ปีบริบูรณ์ขึ้นไป มีถิ่นที่อยู่ในประเทศไทย",
		"ฝากขั้นต่ำ 10,000 บาท สูงสุดไม่เกิน 1,500,000 บาท ฝากได้ 1 รายการฝาก",
		"เปิดบัญชีได้เพียง 1 บัญชี ต่อ 1 ท่าน (รวมกันทุกธนาคาร)",
		"ต้องมีบัญชีออมทรัพย์กับธนาคารเพื่อผูกคู่โอนรับเงินต้นพร้อมดอกเบี้ย",
		"ถอนก่อนครบกำหนดไม่ถึง 3 เดือน ไม่ได้รับดอกเบี้ย",
		"ถอนก่อนครบกำหนดตั้งแต่ 3 เดือนขึ้นไป จ่ายดอกเบี้ยออมทรัพย์ ณ วันที่ปิดบัญชี",
		"ดอกเบี้ยเกิน 30,000 บาทต่อปี ไม่ได้รับยกเว้นภาษี",
	],
	metadata: {
		officialName: "บัญชีฝากประจำแฮปปี ซีเนียร์",
		productCategory: "เงินฝากประจำ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยเมื่อครบกำหนด โอนเข้าบัญชีออมทรัพย์คู่โอน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
