import { calculate, calculates } from "./calculation"

export const findMaxAmountForPercent = (percent: number) => {
	const data = calculates(1, 5_000_000)
	return data.reduce((prev, curr) => {
		if (curr.amount > prev.amount && curr.percent > percent) {
			return curr
		}

		return prev
	}, data.at(0) ?? { amount: 0, interest: 0, percent: 0 })
}

export const findPercentByAmount = (amount: number) => {
	return calculate(amount)
}
