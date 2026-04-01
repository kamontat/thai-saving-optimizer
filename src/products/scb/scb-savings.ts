import type { SavingsProduct } from "../../models/types.ts";

const baseUrl =
	"https://www.scb.co.th/th/personal-banking/deposits/savings-account";

export const scbSavings: SavingsProduct = {
	id: "scb-savings",
	type: "savings",
	name: "SCB Savings",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 0.25,
	minDeposit: 500,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.25 }],
	url: `${baseUrl}/savings-account.html`,
	tags: [],
	description:
		"บัญชีเงินฝากออมทรัพย์ทั่วไป SCB ฝาก-ถอน-โอน ได้ทุกที่ทุกเวลา ดอกเบี้ย 0.25% ต่อปี",
	conditions: ["เปิดบัญชีขั้นต่ำ 500 บาท", "ฝาก-ถอน-โอน ได้ทุกที่ทุกเวลา"],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ทั่วไป",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดคงเหลือทุกสิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (25 มิถุนายน และ 25 ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};

export const scbEasySavings: SavingsProduct = {
	id: "scb-easy-savings",
	type: "savings",
	name: "SCB Easy Savings",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 1.45,
	minDeposit: 500,
	tiers: [
		{ min: 0, max: 1_000_000, rate: 1.45 },
		{ min: 1_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: `${baseUrl}/easy-saving-account.html`,
	tags: ["high-rate", "digital"],
	description:
		"บัญชีเงินฝากออมทรัพย์ อีซี่ ดอกเบี้ยสูง 1.45% ตั้งแต่บาทแรก ถึง 1 ล้านบาท แบบ E-PASSBOOK",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 500 บาท",
		"เฉพาะลูกค้าที่ไม่เคยมีบัญชีเงินฝากกับธนาคาร",
		"บัญชีแบบ E-Passbook ไม่มีสมุดคู่ฝาก",
		"จ่ายดอกเบี้ยเดือนละ 1 ครั้ง ทุกวันที่ 25",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ อีซี่",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดคงเหลือทุกวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง ทุกวันที่ 25 ของแต่ละเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};

export const scbJadTem: SavingsProduct = {
	id: "scb-jad-tem",
	type: "savings",
	name: "SCB Jad Tem",
	bank: "Siam Commercial Bank (SCB)",
	headlineRate: 1.25,
	minDeposit: 500,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.25 },
		{ min: 100_000, max: 3_000_000, rate: 1.25 },
		{ min: 3_000_000, max: Number.POSITIVE_INFINITY, rate: 0.25 },
	],
	url: `${baseUrl}/jad-tem-account.html`,
	tags: ["high-rate"],
	description:
		"บัญชีเงินฝากจัดเต็ม ดอกเบี้ยสูงสุด 1.25% สำหรับยอดเงินส่วนที่เกิน 100,000 ถึง 3,000,000 บาท",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 500 บาท",
		"จำกัด 1 ราย เปิดบัญชี 1 บัญชี",
		"เฉพาะบุคคลธรรมดาที่มีถิ่นที่อยู่ในประเทศไทย",
		"ไม่สามารถเปิดบัญชีร่วม หรือคณะบุคคลได้",
	],
	metadata: {
		officialName: "บัญชีเงินฝากจัดเต็ม",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดคงเหลือทุกวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (25 มิถุนายน และ 25 ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 1 มี.ค. 2569",
	},
	updatedAt: "2026-03-24",
};
