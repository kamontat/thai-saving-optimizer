import type { SavingsProduct } from "../../models/types.ts";

const savingsUrl = "https://www.thaicreditbank.com/Page/45?lang=th";

export const tcbSavings: SavingsProduct = {
	id: "tcb-savings",
	type: "savings",
	name: "Thai Credit Savings",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 0.4,
	minDeposit: 500,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.4 }],
	url: savingsUrl,
	tags: [],
	description: "บัญชีเงินฝากออมทรัพย์ทั่วไป คล่องตัวสูง ฝาก-ถอนได้ทุกวัน ไม่จำกัดจำนวนครั้ง",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 500 บาท",
		"เปิดบัญชีได้ทั้งบุคคลธรรมดาและนิติบุคคล",
		"ให้บริการในรูปแบบสมุดคู่ฝาก",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดเงินคงเหลือทุกสิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (วันที่ 25 มิถุนายน และ 25 ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbBasicBanking: SavingsProduct = {
	id: "tcb-basic-banking",
	type: "savings",
	name: "Thai Credit Basic Banking Account",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 0.4,
	tiers: [{ min: 0, max: Number.POSITIVE_INFINITY, rate: 0.4 }],
	url: savingsUrl,
	tags: ["no-min-deposit", "special-conditions"],
	description:
		"บัญชีเงินฝากพื้นฐาน สำหรับผู้ถือบัตรสวัสดิการแห่งรัฐ หรือผู้มีอายุ 65 ปีขึ้นไป ฟรีค่าธรรมเนียม",
	conditions: [
		"สำหรับผู้ได้รับสิทธิประโยชน์สวัสดิการแห่งรัฐ หรือผู้มีอายุ 65 ปีขึ้นไป ณ วันที่เปิดบัญชี",
		"ไม่มีค่าธรรมเนียมรักษาบัญชี",
		"ไม่มีค่าธรรมเนียมกรณีปิดบัญชีภายใน 1 เดือน",
		"ฟรีค่าธรรมเนียมบัตร ATM",
	],
	metadata: {
		officialName: "บัญชีเงินฝากพื้นฐาน (Basic Banking Account)",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดเงินคงเหลือทุกสิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (วันที่ 25 มิถุนายน และ 25 ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbPlusSpecial: SavingsProduct = {
	id: "tcb-plus-special",
	type: "savings",
	name: "Thai Credit Plus Special",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.4,
	minDeposit: 100_000,
	tiers: [
		{ min: 0, max: 100_000, rate: 0.4 },
		{ min: 100_000, max: 20_000_000, rate: 1.4 },
		{ min: 20_000_000, max: Number.POSITIVE_INFINITY, rate: 0.5 },
	],
	url: savingsUrl,
	tags: ["high-rate", "tiered"],
	description:
		"บัญชีออมทรัพย์เพิ่มค่าพิเศษ ดอกเบี้ยสูงสุด 1.40% สำหรับยอด 100,000 - 20 ล้านบาท",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 100,000 บาท",
		"สำหรับบุคคลธรรมดาเท่านั้น",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชีเท่านั้น",
		"ยอดต่ำกว่า 100,000 บาท คำนวณดอกเบี้ยทั้งจำนวนในอัตราออมทรัพย์ปกติ",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์เพิ่มค่าพิเศษ",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยแบบทั้งจำนวนและก้าวหน้าจากยอดเงินฝากคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง คำนวณดอกเบี้ยถึงวันที่ 25 ของทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbTemKrapuk: SavingsProduct = {
	id: "tcb-tem-krapuk",
	type: "savings",
	name: "Thai Credit Tem Krapuk",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.3,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 500_000, rate: 1.3 },
		{ min: 500_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: savingsUrl,
	tags: ["high-rate", "tiered"],
	description: "บัญชีออมทรัพย์เต็มกระปุก ดอกเบี้ยสูงสุด 1.30% สำหรับยอดไม่เกิน 500,000 บาท",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"สำหรับบุคคลธรรมดาเท่านั้น",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชีเท่านั้น",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์เต็มกระปุก",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยแบบก้าวหน้าจากยอดเงินฝากคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง คำนวณดอกเบี้ยถึงวันที่ 25 ของทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbPlusAccountOne: SavingsProduct = {
	id: "tcb-plus-account-one",
	type: "savings",
	name: "Thai Credit Plus Account One",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 0.6,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 5_000, rate: 0.4 },
		{ min: 5_000, max: 10_000_000, rate: 0.6 },
		{ min: 10_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: savingsUrl,
	tags: ["tiered"],
	description:
		"บัญชีออมทรัพย์เพิ่มค่า Plus Account One ดอกเบี้ยสูงสุด 0.60% พร้อมรับดอกเบี้ยรายเดือน",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"เปิดบัญชีได้ทั้งบุคคลธรรมดาและนิติบุคคล",
		"ยอดต่ำกว่า 5,000 บาท คำนวณดอกเบี้ยทั้งจำนวนในอัตราออมทรัพย์ปกติ",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ เพิ่มค่า Plus Account One",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยแบบทั้งจำนวนจากยอดเงินฝากคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง คำนวณดอกเบี้ยถึงวันที่ 25 ของทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbPlusHi: SavingsProduct = {
	id: "tcb-plus-hi",
	type: "savings",
	name: "Thai Credit Plus Hi",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 0.8,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 10_000_000, rate: 0.6 },
		{ min: 10_000_000, max: 50_000_000, rate: 0.8 },
		{ min: 50_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: savingsUrl,
	tags: ["tiered"],
	description:
		"บัญชีออมทรัพย์เพิ่มค่า Plus Hi ดอกเบี้ยสูงสุด 0.80% แบบก้าวหน้า พร้อมรับดอกเบี้ยรายเดือน",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"สำหรับบุคคลธรรมดาเท่านั้น",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชีเท่านั้น",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ เพิ่มค่า Plus Hi",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยแบบก้าวหน้าจากยอดเงินฝากคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง คำนวณดอกเบี้ยถึงวันที่ 25 ของทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbBizPlus: SavingsProduct = {
	id: "tcb-biz-plus",
	type: "savings",
	name: "Thai Credit Biz Plus",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 1.45,
	minDeposit: 5_000,
	tiers: [
		{ min: 0, max: 1_000_000, rate: 0.0 },
		{ min: 1_000_000, max: 20_000_000, rate: 1.2 },
		{ min: 20_000_000, max: 50_000_000, rate: 1.45 },
		{ min: 50_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: savingsUrl,
	tags: ["high-rate", "tiered", "special-conditions"],
	description:
		"บัญชีออมทรัพย์ธุรกิจ Biz Plus สำหรับนิติบุคคล ดอกเบี้ยสูงสุด 1.45% พร้อมรับดอกเบี้ยรายเดือน",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 5,000 บาท",
		"สำหรับนิติบุคคลทั่วไปและนิติบุคคลไม่แสวงหากำไรเท่านั้น",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชี",
		"ยอดต่ำกว่า 1 ล้านบาท ไม่ได้รับดอกเบี้ย",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ ธุรกิจ Biz Plus",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation:
			"คำนวณดอกเบี้ยแบบทั้งจำนวนและก้าวหน้าจากยอดเงินฝากคงเหลือ ณ สิ้นวัน",
		payoutFrequency: "เดือนละ 1 ครั้ง คำนวณดอกเบี้ยถึงวันที่ 25 ของทุกเดือน",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};

export const tcbBizDefined: SavingsProduct = {
	id: "tcb-biz-defined",
	type: "savings",
	name: "Thai Credit Biz Defined",
	bank: "Thai Credit Bank (TCB)",
	headlineRate: 0.85,
	minDeposit: 50_000_000,
	tiers: [
		{ min: 0, max: 50_000_000, rate: 0.4 },
		{ min: 50_000_000, max: 300_000_000, rate: 0.85 },
		{ min: 300_000_000, max: Number.POSITIVE_INFINITY, rate: 0.4 },
	],
	url: savingsUrl,
	tags: ["tiered", "special-conditions"],
	description: "บัญชีออมทรัพย์ Biz Defined สำหรับนิติบุคคลที่มีเงินฝากเฉลี่ยมากกว่า 50 ล้านบาท",
	conditions: [
		"เปิดบัญชีขั้นต่ำ 50,000,000 บาท",
		"สำหรับนิติบุคคลทั่วไป กองทุน และบริษัทประกัน",
		"ต้องมีเงินฝากประเภทออมทรัพย์เฉลี่ยมากกว่า 50 ล้านบาท ติดต่อกัน 2 ปีขึ้นไป",
		"ผู้ฝาก 1 ราย เปิดได้ 1 บัญชี",
	],
	metadata: {
		officialName: "บัญชีเงินฝากออมทรัพย์ Biz Defined",
		productCategory: "เงินฝากออมทรัพย์",
		interestCalculation: "คำนวณดอกเบี้ยจากยอดเงินฝากคงเหลือทุกสิ้นวัน",
		payoutFrequency: "ปีละ 2 ครั้ง (วันที่ 25 มิถุนายน และ 25 ธันวาคม)",
		notes: "อัตราดอกเบี้ยมีผล ณ 18 มี.ค. 2569",
	},
	updatedAt: new Date("2026-03-24"),
};
