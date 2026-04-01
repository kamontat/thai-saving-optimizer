import type { SavingsProduct } from "../../models/types.ts";

export const kkpLifecareSaving: SavingsProduct = {
	id: "kkp-lifecare-saving",
	type: "savings",
	name: "KKP Lifecare Saving",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 0.25,
	minDeposit: 50_000,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.25 }],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-lifecare-saving",
	tags: ["insurance"],
	description:
		"บัญชีออมทรัพย์พร้อมประกันโรคร้ายแรง KKP Lifecare Saving ดอกเบี้ย 0.25% ต่อปี พร้อมความคุ้มครอง 40 โรคร้ายแรง",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 18-60 ปี",
		"เปิดบัญชีขั้นต่ำ 50,000 บาท",
		"ไม่สามารถถอนให้เหลือต่ำกว่า 50,000 บาท (ยกเว้นปิดบัญชี)",
		"ต้องแถลงสุขภาพและผ่านการพิจารณารับประกันภัย",
		"ระยะเวลารอคอย 60 วัน",
		"จำนวนเงินเอาประกัน = 125% ของยอดเฉลี่ย 2 เดือน สูงสุดไม่เกิน 1,000,000 บาท",
	],
	metadata: {
		officialName: "เงินฝาก KKP Lifecare Saving (บัญชีออมทรัพย์พร้อมประกันโรคร้ายแรง)",
		productCategory: "เงินฝากออมทรัพย์พร้อมประกัน",
		interestCalculation: "คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		insuranceNote:
			"คุ้มครอง 40 โรคร้ายแรง รับประกันโดย บริษัท เจนเนอราลี่ ประกันชีวิต (ไทยแลนด์) จำกัด (มหาชน)",
		notes: "อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569",
	},
	updatedAt: "2026-03-24",
};
