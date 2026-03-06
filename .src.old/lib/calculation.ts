import { roundNumber } from "./format"

const _calculateInterest = (name: string, amount: number, percent: number) => {
	const interest = amount * (percent / 100)
	// console.log(`  -> ${name.padEnd(6)} : ${amount} * ${percent}% => ${interest}`)
	return interest
}

/**
 * Calculate interest based on KKP Saving account balance tiers
 *
 * @param amount - The account balance in THB
 * @returns The calculated annual interest amount
 *
 * Interest rates by tier (per year):
 * - 1 - 10,000: 0.50%
 * - 10,000 - 50,000: 2.00%
 * - 50,000 - 3,000,000: 1.50%
 * - 3,000,000+: 0.50%
 *
 * Bonus: If amount > 10,000, additional 2% interest is calculated on the portion between 5,000-15,000
 *
 * @see https://media.kkpfg.com/document/2025/May/KKP_Start_Saving_Multi_Pricing_Campaign.pdf
 */
export const calculateInterest = (amount: number) => {
	if (amount <= 0) return 0

	let interest = 0
	// Tier 1: 1 - 10,000 → 0.5%
	if (amount > 0)
		interest += _calculateInterest("Tier 1", Math.min(amount, 10_000), 0.5)

	// Add bonus interest if amount > 10,000
	// Bonus: 5,000 - 15,000 → 2%
	if (amount > 10_000)
		interest += _calculateInterest("Bonus", Math.min(amount, 15_000) - 5_000, 2)

	// Tier 2: 10,000 - 50,000 → 2%
	if (amount > 10_000)
		interest += _calculateInterest(
			"Tier 2",
			Math.min(amount - 10_000, 40_000),
			2,
		)

	// Tier 3: 50,000 - 3,000,000 → 1.5%
	if (amount > 50_000)
		interest += _calculateInterest(
			"Tier 3",
			Math.min(amount - 50_000, 2_950_000),
			1.5,
		)

	// Tier 4: 3,000,000+ → 0.5%
	if (amount > 3_000_000)
		interest += _calculateInterest(
			"Tier 4",
			Math.min(amount - 3_000_000, 2_950_000),
			0.5,
		)

	return interest
}

export const calculatePercent = (amount: number, interest: number) => {
	return (interest / amount) * 100
}

export const calculates = (start: number, end: number, inc = 1) => {
	const output = []
	for (let i = start; i <= end; i += inc) {
		output.push(calculate(i + start))
	}
	return output
}

export const calculate = (amount: number) => {
	const interest = roundNumber(calculateInterest(amount), 4)
	const percent = roundNumber(calculatePercent(amount, interest), 4)
	return {
		amount,
		interest,
		percent,
	}
}
