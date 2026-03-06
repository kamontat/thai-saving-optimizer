export const roundNumber = (num: number, n: number) => {
	return Number(num.toFixed(n))
}

export const formatCurrency = (amount: number) => {
	return amount
		.toLocaleString("en-US", {
			style: "currency",
			currency: "THB",
		})
		.padStart(20)
}

export const formatPercent = (percent: number) => {
	return `${percent.toFixed(2)}%`.padStart(8)
}
