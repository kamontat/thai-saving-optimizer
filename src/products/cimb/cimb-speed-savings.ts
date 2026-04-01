import type { SavingsProduct } from "../../models/types.ts";

export const cimbSpeedSavings: SavingsProduct = {
	id: "cimb-speed-savings",
	type: "savings",
	name: "CIMB Thai Speed Savings",
	bank: "CIMB Thai (CIMBT)",
	headlineRate: 1.1,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.25 },
		{ min: 100_000, max: 3_000_000, rate: 1.05 },
		{ min: 3_000_000, max: 50_000_000, rate: 1.1 },
		{ min: 50_000_000, max: 500_000_000, rate: 0.7 },
		{ min: 500_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: "https://www.cimbthai.com/th/personal/products/accounts/savings-account/speed-savings.html",
	tags: ["tiered", "special-conditions"],
	description:
		"บัญชีเงินฝากออมทรัพย์ สปีด เซฟวิ่งส์ ซีไอเอ็มบี ไทย ดอกเบี้ยสูงสุด 1.10% ต่อปี คำนวณแบบยอดรวม",
	conditions: [
		"ไม่รับเปิดบัญชีใหม่ตั้งแต่วันที่ 1 มีนาคม 2569 เป็นต้นไป",
		"สำหรับบุคคลธรรมดา",
		"รับดอกเบี้ยรายเดือน",
	],
	metadata: {
		officialName: "เงินฝากออมทรัพย์ สปีด เซฟวิ่งส์ ซีไอเอ็มบี ไทย",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบยอดรวม (Tier Rate)",
		payoutFrequency: "จ่ายดอกเบี้ยรายเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 11 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
