import type { BankName, MetadataKey, TagId } from "../constants/index.ts";

export interface Tier {
	min: number;
	max: number;
	rate: number;
}

export type ProductMetadata = Partial<Record<MetadataKey, string>>;

export interface BaseProduct {
	id: string;
	name: string;
	bank: BankName;
	headlineRate: number;
	tiers: Tier[];
	minDeposit?: number;
	maxDeposit?: number;
	url: string;
	description: string;
	tags: TagId[];
	conditions?: string[];
	metadata: ProductMetadata;
	updatedAt: Date;
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
