export function roundNumber(num: number, decimals: number): number {
	const factor = 10 ** decimals;
	return Math.round(num * factor) / factor;
}

export function formatCurrency(amount: number): string {
	return `฿${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatPercent(percent: number): string {
	return `${percent.toFixed(2)}%`;
}
