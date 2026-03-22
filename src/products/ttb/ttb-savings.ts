import type { SavingsProduct } from "../../models/types.ts";

const baseMetadata = {
	productCategory: "เงินฝากออมทรัพย์",
	interestCalculation:
		"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน",
	payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
	notes: "อัตราดอกเบี้ยมีผล ณ มี.ค. 2569",
};

export const ttbAllFree: SavingsProduct = {
	id: "ttb-all-free",
	type: "savings",
	name: "ttb All Free",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.15,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.15 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/transactional-account/ttb-all-free",
	tags: ["insurance"],
	description:
		"บัญชีออมทรัพย์ ฟรีค่าธรรมเนียมทุกธุรกรรม พร้อมประกันอุบัติเหตุ 20 เท่าของเงินฝาก สูงสุด 3 ล้านบาท",
	conditions: [
		"คงเงินฝากไม่ต่ำกว่า 5,000 บาท ทุกวันตลอดเดือน เพื่อรับประกันอุบัติเหตุเดือนถัดไป",
		"ฟรีค่าธรรมเนียม กด โอน จ่าย เติม ทุกตู้ ATM ทั่วประเทศ",
		"ฟรี FX Rate 2.5% และ DCC 1% เมื่อใช้จ่ายต่างประเทศ",
		"เบิกค่ารักษาอุบัติเหตุ สูงสุด 3,000 บาท/ครั้ง ไม่จำกัดครั้ง",
	],
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี ออลล์ฟรี",
		insuranceNote:
			"ประกันอุบัติเหตุ 20 เท่าของเงินฝาก สูงสุด 3,000,000 บาท",
	},
};

export const ttbBasic: SavingsProduct = {
	id: "ttb-basic",
	type: "savings",
	name: "ttb Basic",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.15,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.15 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/transactional-account/ttb-basic",
	tags: [],
	description:
		"บัญชีออมทรัพย์พื้นฐาน ฝาก ถอน โอนเงินระหว่างบัญชี ttb ไม่เสียค่าธรรมเนียม",
	conditions: [
		"ฝาก ถอน โอนเงินระหว่างบัญชี ttb ไม่เสียค่าธรรมเนียม",
	],
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากออมทรัพย์ ทีทีบี เบสิก",
	},
};

export const ttbPuentarn: SavingsProduct = {
	id: "ttb-puentarn",
	type: "savings",
	name: "ttb Puentarn",
	bank: "TMBThanachart Bank (ttb)",
	headlineRate: 0.15,
	tiers: [
		{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.15 },
	],
	url: "https://www.ttbbank.com/th/personal/deposits/transactional-account/puentarn",
	tags: [],
	description:
		"บัญชีเงินฝากพื้นฐาน รับเงินสวัสดิการจากรัฐ ไม่มีค่าใช้จ่าย",
	conditions: [
		"สำหรับรับเงินสวัสดิการจากรัฐ",
		"ไม่มีค่าใช้จ่ายในการใช้บริการ",
	],
	metadata: {
		...baseMetadata,
		officialName: "บัญชีเงินฝากพื้นฐาน ทีทีบี",
	},
};
