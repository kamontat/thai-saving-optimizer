import type { Allocation, Product } from "../models/types.ts";
import { calculateProductInterest } from "./interest.ts";

export function optimizeAllocation(
	products: Product[],
	amount: number,
): Allocation[] {
	if (amount <= 0) return [];

	const allocationMap = new Map<string, number>();
	let remaining = amount;

	while (remaining > 0) {
		let bestProduct: Product | null = null;
		let bestFillAmount = 0;
		let bestRate = -1;

		for (const product of products) {
			const current = allocationMap.get(product.id) ?? 0;
			const maxAllowed = product.maxDeposit ?? Number.POSITIVE_INFINITY;
			if (current >= maxAllowed) continue;

			if (
				(product.type === "fixed-deposit" ||
					product.type === "long-term") &&
				product.minDeposit !== undefined &&
				current === 0 &&
				remaining < product.minDeposit
			) {
				continue;
			}

			// Find which tier the current allocation falls in
			const currentTierIdx = product.tiers.findIndex((t) => current < t.max);
			if (currentTierIdx < 0) continue;

			// Evaluate filling to each tier boundary from the current allocation.
			// This considers the blended rate of filling through lower tiers
			// to reach a higher-rate tier, avoiding the bug where a high-rate
			// tier is selected without accounting for required lower-tier deposits.
			for (let i = currentTierIdx; i < product.tiers.length; i++) {
				const tier = product.tiers[i];
				const tierMax =
					tier.max === Number.POSITIVE_INFINITY
						? current + remaining
						: Math.min(tier.max, maxAllowed);

				const fillTo = Math.min(tierMax, current + remaining);
				const fillAmount = fillTo - current;
				if (fillAmount <= 0) continue;

				const interestBefore = calculateProductInterest(product, current);
				const interestAfter = calculateProductInterest(product, fillTo);
				const interestDelta = interestAfter - interestBefore;
				const effectiveRate = interestDelta / fillAmount;

				if (
					effectiveRate > bestRate ||
					(effectiveRate === bestRate && fillAmount > bestFillAmount)
				) {
					bestRate = effectiveRate;
					bestProduct = product;
					bestFillAmount = fillAmount;
				}
			}
		}

		if (!bestProduct || bestFillAmount <= 0) break;

		const current = allocationMap.get(bestProduct.id) ?? 0;
		allocationMap.set(bestProduct.id, current + bestFillAmount);
		remaining -= bestFillAmount;
	}

	const allocations: Allocation[] = [];
	for (const product of products) {
		const allocatedAmount = allocationMap.get(product.id);
		if (!allocatedAmount || allocatedAmount <= 0) continue;
		const interest = calculateProductInterest(product, allocatedAmount);
		const effectiveRate =
			allocatedAmount > 0 ? (interest / allocatedAmount) * 100 : 0;
		allocations.push({
			product,
			amount: allocatedAmount,
			interest,
			effectiveRate,
		});
	}

	allocations.sort((a, b) => b.effectiveRate - a.effectiveRate);
	return allocations;
}
