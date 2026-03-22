import type { SavingsProduct } from "../../models/types.ts";

export const ttbTheExclusiveSavings: SavingsProduct = {
	id: "ttb-the-exclusive-savings",
	type: "savings",
	name: "ttb The Exclusive Savings",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.5,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-the-exclusive-savings",
	tags: ["special-conditions"],
	description:
		"ออมทรัพย์พิเศษ ดอกเบี้ยลอยตัว+โบนัส ผูกคู่ประกันชีวิต ttb The Treasure หรือ Infinity Wealth",
	conditions: [
		"ต้องมีกรมธรรม์ ทีทีบี เดอะ เทรเชอร์ (88/8) หรือ อินฟินิตี เวลธ์ (99/9)",
		"เปิดได้ 1 บัญชีต่อ 1 กรมธรรม์",
		"เปิดบัญชีได้เฉพาะที่สาขาเท่านั้น",
		"จำนวนเงินฝากต้องเท่ากับเบี้ยประกันชีวิตที่คงเหลือ",
		"ไม่สามารถถอนบางส่วนได้ ต้องถอนเต็มจำนวนและปิดบัญชี",
		"ธนาคารจะหักเงินเพื่อชำระเบี้ยประกันชีวิตอัตโนมัติ",
	],
	metadata: {
		officialName:
			"บัญชีเงินฝากออมทรัพย์พิเศษ ทีทีบี ดิ เอ็กซ์คลูซีฟ",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยแบบลอยตัว + ดอกเบี้ยโบนัสตั้งแต่บาทแรก",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
};
