import type { SavingsProduct } from "../models/types.ts";

export const uobOneAccount: SavingsProduct = {
	id: "uob-one-account",
	type: "savings",
	name: "UOB ONE ACCOUNT",
	bank: "United Overseas Bank (UOB)",
	headlineRate: 1.0,
	tiers: [
		{ min: 0, max: 1_000_000, rate: 1.0 },
		{ min: 1_000_000, max: Number.POSITIVE_INFINITY, rate: 0.15 },
	],
	url: "https://www.uob.co.th/personal/deposits/savings-account/uob-one-account.page",
	tags: ["tiered", "special-conditions"],
	description:
		"บัญชีออมทรัพย์ UOB ONE ACCOUNT ดอกเบี้ยสูงสุด 1.00% ต่อปี สำหรับ 1 ล้านบาทแรก เมื่อทำธุรกรรมครบ 4 รายการต่อเดือน",
	conditions: [
		"ดอกเบี้ยปกติ 0.15% ต่อปี ทุกยอดเงินฝาก",
		"รับเพิ่มดอกเบี้ยโบนัส 0.85% ต่อปี สำหรับ 1 ล้านบาทแรก เมื่อทำธุรกรรมครบ 4 รายการต่อเดือน",
		"ธุรกรรมที่ใช้ได้: จ่ายบิล รับโอนเงิน ใช้บัตรเครดิต/เดบิต รับเงินเดือนผ่าน payroll",
		"ฝาก-ถอนได้ไม่จำกัดจำนวนครั้ง",
		"รับดอกเบี้ยทุกเดือน",
	],
	metadata: {
		officialName: "บัญชีออมทรัพย์ UOB ONE ACCOUNT",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยจากยอดเงินฝากเฉลี่ยของเดือน แบบขั้นบันได",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
	},
};
