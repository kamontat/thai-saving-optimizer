import type { SavingsProduct } from "../../models/types.ts";

export const kkpStartSaving: SavingsProduct = {
	id: "kkp-start-saving",
	type: "savings",
	name: "KKP Start Saving",
	bank: "Kiatnakin Phatra (KKP)",
	headlineRate: 3.5,
	tiers: [
		{ min: 0, max: 5_000, rate: 0.5 },
		{ min: 5_000, max: 10_000, rate: 2.5 },
		{ min: 10_000, max: 15_000, rate: 3.5 },
		{ min: 15_000, max: 50_000, rate: 1.5 },
		{ min: 50_000, max: 3_000_000, rate: 1.35 },
		{ min: 3_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: "https://bank.kkpfg.com/th/personal-banking/deposit/savings-account/kkp-start-saving",
	tags: ["digital", "high-rate", "promotion", "tiered"],
	description:
		"บัญชีออมทรัพย์ KKP Start Saving เปิดผ่านแอป TrueMoney Wallet ให้ดอกเบี้ยสูงสุด 3.50% ต่อปี (รวมโบนัส)",
	conditions: [
		"สำหรับบุคคลธรรมดา สัญชาติไทย อายุ 15 ปีขึ้นไป",
		"เปิดบัญชีผ่านแอป TrueMoney Wallet เท่านั้น",
		"ไม่จำกัดจำนวนเงินขั้นต่ำในการเปิดบัญชี",
		"จำกัด 1 คน ต่อ 1 บัญชี",
		"บัญชีไม่เคลื่อนไหว 90 วัน อาจถูกปิดอัตโนมัติ",
		"ปิดบัญชีภายใน 30 วัน มีค่าธรรมเนียม",
		"ดอกเบี้ยโบนัส 2% ต่อปี สำหรับยอด 5,000-15,000 บาท ต้องสมัครตั้งฝากอัตโนมัติผ่าน TrueMoney",
		"โปรโมชั่นดอกเบี้ยโบนัส: 26 ก.ค. 2567 – 25 มี.ค. 2569 (คำนวณดอกเบี้ยถึง 30 มิ.ย. 2569)",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ KKP START SAVING",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยเป็นรายวันจากยอดเงินคงเหลือ ณ สิ้นวัน แบบขั้นบันได (tier-based)",
		payoutFrequency:
			"ปีละ 2 ครั้ง (สิ้นเดือนมิถุนายน และ ธันวาคม) / ดอกเบี้ยโบนัสจ่ายรายเดือน",
		insuranceNote: "เงินฝากนี้ได้รับการคุ้มครองจากสถาบันคุ้มครองเงินฝากตามจำนวนที่กำหนดไว้",
		promotionEnd: "2026-06-30",
		notes:
			"อยู่ภายใต้โครงการ Regulatory Sandbox ของธนาคารแห่งประเทศไทย อัตราดอกเบี้ยมีผล ณ 27 ก.พ. 2569 รวมดอกเบี้ยโบนัสจากแคมเปญตั้งฝากอัตโนมัติ",
	},
};
