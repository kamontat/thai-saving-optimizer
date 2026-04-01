import type { SavingsProduct } from "../../models/types.ts";

export const ttbSavingsCare: SavingsProduct = {
	id: "ttb-savings-care",
	type: "savings",
	name: "ttb Savings Care",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.15,
	minDeposit: 5_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.15 }],
	url: "https://www.ttbbank.com/th/personal/deposits/savings-account/ttb-savings-care",
	tags: ["insurance"],
	description: "บัญชีออมทรัพย์พร้อมประกันอุบัติเหตุ คุ้มครอง 20 เท่าของเงินฝาก สูงสุด 3 ล้านบาท",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"ต้องมีเงินในบัญชีไม่น้อยกว่า 5,000 บาท เพื่อรับประกันอุบัติเหตุ",
		"อายุ 15-70 ปีบริบูรณ์",
		"ต้องไม่ใช่บัญชีที่เปิดร่วมกับผู้อื่น",
		"ไม่สามารถใช้ร่วมกับบัตรเดบิต",
		"ความคุ้มครองไม่รวมการถูกฆาตกรรมและรถจักรยานยนต์",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี เซฟวิ่ง แคร์",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		insuranceNote: "ประกันอุบัติเหตุ 20 เท่าของเงินฝาก สูงสุด 3,000,000 บาท/ปี",
		notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
