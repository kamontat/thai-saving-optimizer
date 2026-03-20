export interface Tier {
	min: number;
	max: number;
	rate: number;
}

export interface ProductMetadata {
	logo?: string;
	color?: string;
	officialName: string;
	productCategory: string;
	interestCalculation: string;
	payoutFrequency: string;
	insuranceNote?: string;
	promotionEnd?: string;
	notes?: string;
}

export interface BaseProduct {
	id: string;
	name: string;
	bank: string;
	headlineRate: number;
	tiers: Tier[];
	minDeposit?: number;
	maxDeposit?: number;
	url: string;
	description: string;
	tags: string[];
	conditions?: string[];
	metadata: ProductMetadata;
}

export interface SavingsProduct extends BaseProduct {
	type: "savings";
}

export interface FixedDepositProduct extends BaseProduct {
	type: "fixed-deposit";
	termMonths: number;
}

export interface LongTermProduct extends BaseProduct {
	type: "long-term";
	termMonths: number;
}

export type Product = SavingsProduct | FixedDepositProduct | LongTermProduct;

export interface Allocation {
	product: Product;
	amount: number;
	interest: number;
	effectiveRate: number;
}
