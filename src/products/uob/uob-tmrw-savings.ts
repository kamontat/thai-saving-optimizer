import type { SavingsProduct } from "../../models/types.ts";

export const uobTmrwSavings: SavingsProduct = {
	id: "uob-tmrw-savings",
	type: "savings",
	name: "UOB TMRW Savings",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 1.4,
	tiers: [
		{ min: 0, max: 5_000_000, rate: 1.4 },
		{ min: 5_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://www.uob.co.th/personal/ebank/tmrw/products/accounts.page",
	tags: ["digital", "no-min-deposit", "high-rate", "tiered"],
	description:
		"บัญชีออมทรัพย์ TMRW Savings ดอกเบี้ยสูงสุด 1.40% ต่อปี สำหรับ 5 ล้านบาทแรก เปิดผ่านแอป UOB TMRW",
	conditions: [
		"เปิดบัญชีผ่านแอป UOB TMRW เท่านั้น",
		"เฉพาะลูกค้าบุคคลธรรมดาที่ถือสัญชาติไทย อายุตั้งแต่ 20 ปีบริบูรณ์",
		"บัญชีเดี่ยวเท่านั้น จำกัด 1 บัญชีต่อท่าน",
		"ดอกเบี้ยปกติ 0.25% ต่อปี ทุกยอดเงินฝาก",
		"รับเพิ่มดอกเบี้ยโบนัส 1.15% ต่อปี สำหรับ 5 ล้านบาทแรก เมื่อยอดเงินฝากเฉลี่ยของเดือนปัจจุบัน >= เดือนที่แล้ว",
		"รับดอกเบี้ยโบนัสสำหรับเดือนแรกที่เปิดบัญชีทันที",
	],
	metadata: {
		officialName: "บัญชีออมทรัพย์ TMRW Savings",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยจากยอดเงินฝากคงเหลือ ณ สิ้นวัน (ปกติ) และยอดเงินฝากเฉลี่ยของเดือน (โบนัส)",
		payoutFrequency:
			"จ่ายดอกเบี้ยรายเดือน (ปกติ: วันทำการสุดท้ายของเดือน, โบนัส: วันทำการแรกของเดือนถัดไป)",
		notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
	},
};
