import type { SavingsProduct } from "../models/types.ts";

export const uobStash: SavingsProduct = {
	id: "uob-stash",
	type: "savings",
	name: "UOB STASH",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 1.0,
	tiers: [
		{ min: 0, max: 2_000_000, rate: 1.0 },
		{ min: 2_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://www.uob.co.th/personal/deposits/savings-account/uob-stash.page",
	tags: ["digital", "no-min-deposit", "tiered"],
	description:
		"บัญชีเงินฝากไม่ประจำ UOB STASH ดอกเบี้ยสูงสุด 1.00% ต่อปี สำหรับ 2 ล้านบาทแรก",
	conditions: [
		"เปิดบัญชีผ่านแอป UOB TMRW หรือสาขาธนาคาร",
		"บัญชีเดี่ยวเท่านั้น จำกัด 1 บัญชีต่อท่าน",
		"ดอกเบี้ยปกติ 0.50% ต่อปี ทุกยอดเงินฝาก",
		"รับเพิ่มดอกเบี้ยโบนัส 0.50% ต่อปี สำหรับ 2 ล้านบาทแรก เมื่อยอดเงินฝากเฉลี่ยของเดือนปัจจุบัน >= เดือนที่แล้ว",
		"ฝาก-ถอนได้ไม่จำกัดจำนวนครั้ง",
	],
	metadata: {
		officialName: "บัญชีเงินฝากไม่ประจำ (UOB STASH)",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยจากยอดเงินฝากคงเหลือ ณ สิ้นวัน (ปกติ) และยอดเงินฝากเฉลี่ยของเดือน (โบนัส)",
		payoutFrequency:
			"จ่ายดอกเบี้ยรายเดือน (ปกติ: วันทำการสุดท้ายของเดือน, โบนัส: วันทำการแรกของเดือนถัดไป)",
		notes: "อัตราดอกเบี้ยมีผล ณ 2 มี.ค. 2569",
	},
};
