import type { SavingsProduct } from "../models/types.ts";

const baseConditions = [
	"สำหรับบุคคลธรรมดา อายุ 12 ปีขึ้นไป",
	"เปิดบัญชีผ่านแอป K PLUS เท่านั้น",
	"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
	"จำกัด 1 คน ต่อ 1 บัญชี",
	"กรณีดอกเบี้ยรับเกิน 20,000 บาทต่อปี จะเสียภาษีดอกเบี้ยออมทรัพย์ 15%",
];

export const kbankESavings: SavingsProduct = {
	id: "kbank-esavings",
	type: "savings",
	name: "KBank K-eSavings",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 1.35,
	tiers: [
		{ min: 0, max: 500_000, rate: 1.35 },
		{ min: 500_000, max: Number.POSITIVE_INFINITY, rate: 0.35 },
	],
	url: "https://www.kasikornbank.com/th/personal/digital-banking/pages/k-esavings-account.aspx",
	tags: ["digital", "no-min-deposit", "tiered"],
	description:
		"บัญชีเงินฝากออมทรัพย์อิเล็กทรอนิกส์ K-eSavings เปิดผ่าน K PLUS ดอกเบี้ยสูงสุด 1.35% ต่อปี",
	conditions: [
		...baseConditions,
		"ยืนยันตัวตนที่จุด K CHECK ID เช่น ตู้ ATM กสิกรไทย, 7-Eleven, Big C หรือสาขา",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์อิเล็กทรอนิกส์ K-eSavings",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได (อัตราก้าวหน้า)",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 6 ม.ค. 2569",
	},
};

export const kbankEPocket: SavingsProduct = {
	id: "kbank-epocket",
	type: "savings",
	name: "KBank K-ePocket",
	bank: "Kasikorn Bank (KBank)",
	headlineRate: 1.35,
	tiers: [
		{ min: 0, max: 500_000, rate: 1.35 },
		{ min: 500_000, max: Number.POSITIVE_INFINITY, rate: 0.35 },
	],
	url: "https://www.kasikornbank.com/th/personal/digital-banking/pages/k-epocket.aspx",
	tags: ["digital", "no-min-deposit", "tiered"],
	description:
		"บัญชีเงินฝากออมทรัพย์ K-ePocket แบ่งกระเป๋าเก็บเงินได้ ดอกเบี้ยสูงสุด 1.35% ต่อปี",
	conditions: [
		...baseConditions,
		"รองรับการแบ่งกระเป๋า (Pocket) จัดสรรเงินตามหมวดหมู่ผ่าน K PLUS",
		"ยืนยันตัวตนที่จุด K CHECK ID เช่น ตู้ ATM กสิกรไทย, 7-Eleven, Big C หรือสาขา",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ K-ePocket",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได (อัตราก้าวหน้า)",
		payoutFrequency: "ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 6 ม.ค. 2569",
	},
};
