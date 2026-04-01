import type { FixedDepositProduct } from "../../models/types.ts";

const baseUrl =
	"https://bank.kkpfg.com/th/personal-banking/deposit/fixed-deposit";

export const kkpFixedSpecial10m: FixedDepositProduct = {
	id: "kkp-fixed-special-10m",
	type: "fixed-deposit",
	termMonths: 10,
	name: "KKP Fixed Deposit Special 10 Months",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 1.1,
	minDeposit: 100_000,
	maxDeposit: 300_000_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 1.1 }],
	url: baseUrl,
	tags: ["promotion"],
	description:
		"เงินฝากประจำพิเศษ 10 เดือน (มีสมุดคู่ฝาก) ดอกเบี้ย 1.10% ต่อปี จ่ายดอกเบี้ยรายเดือน",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 100,000 บาท ฝากครั้งต่อไปไม่น้อยกว่า 100,000 บาท/รายการ",
		"ยอดเงินฝากในบัญชีสูงสุดไม่เกิน 300 ล้านบาท",
		"ถอนก่อนครบกำหนดต้องถอนเต็มจำนวนแต่ละรายการ",
		"ถอนก่อน 3 เดือนจะไม่ได้รับดอกเบี้ย",
	],
	metadata: {
		officialName: "เงินฝากประจำพิเศษ 10 เดือน",
		productCategory: "เงินฝากประจำพิเศษ",
		interestCalculation: "คำนวณดอกเบี้ยตามอัตราคงที่ตลอดระยะเวลาฝาก",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		promotionEnd: "31 มีนาคม 2569",
		notes:
			"โครงการพิเศษ ตั้งแต่ 12 ม.ค. – 31 มี.ค. 2569 อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: "2026-03-24",
};
