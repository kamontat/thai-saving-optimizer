import type { Product } from "../models/types.ts";

export function calculateProductInterest(
	product: Product,
	amount: number,
): number {
	if (amount <= 0) return 0;
	if (product.minDeposit !== undefined && amount < product.minDeposit) return 0;

	const effective =
		product.maxDeposit !== undefined
			? Math.min(amount, product.maxDeposit)
			: amount;

	let totalInterest = 0;
	for (const tier of product.tiers) {
		if (effective <= tier.min) break;
		const tierAmount = Math.min(effective, tier.max) - tier.min;
		totalInterest += tierAmount * (tier.rate / 100);
	}

	return totalInterest;
}
