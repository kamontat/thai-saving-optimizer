import { formatCurrency, formatPercent } from "../calculator/index.ts";
import { cms } from "../constants/index.ts";
import type { Allocation } from "../models/types.ts";

export default function AllocationResult({
	allocations,
	onExclude,
}: {
	allocations: Allocation[];
	onExclude?: (productId: string) => void;
}) {
	if (allocations.length === 0) {
		return <p className="text-sm text-gray-500">{cms.allocation.emptyState}</p>;
	}

	const totalAmount = allocations.reduce((sum, a) => sum + a.amount, 0);
	const totalInterest = allocations.reduce((sum, a) => sum + a.interest, 0);
	const overallRate = totalAmount > 0 ? (totalInterest / totalAmount) * 100 : 0;

	return (
		<div className="space-y-4">
			<table className="w-full text-sm border-collapse">
				<thead>
					<tr className="border-b border-gray-200 text-left text-gray-600">
						<th className="py-2 pr-4">{cms.allocation.columns.product}</th>
						<th className="py-2 pr-4 text-right">
							{cms.allocation.columns.amount}
						</th>
						<th className="py-2 pr-4 text-right">
							{cms.allocation.columns.annualInterest}
						</th>
						<th className="py-2 text-right">
							{cms.allocation.columns.effectiveRate}
						</th>
						{onExclude && (
							<th className="py-2 pl-4 w-8">
								<span className="sr-only">Actions</span>
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{allocations.map((a) => (
						<tr key={a.product.id} className="border-b border-gray-100">
							<td className="py-2 pr-4">
								<a
									href={`#/product/${a.product.id}`}
									className="text-blue-600 hover:underline"
								>
									{a.product.name}
								</a>
								<span className="text-gray-400 text-xs ml-1">
									({a.product.bank})
								</span>
								{(a.product.type === "fixed-deposit" ||
									a.product.type === "long-term") && (
									<span className="text-orange-600 text-xs ml-1">
										🔒 {a.product.termMonths} months
									</span>
								)}
							</td>
							<td className="py-2 pr-4 text-right font-mono">
								{formatCurrency(a.amount)}
							</td>
							<td className="py-2 pr-4 text-right font-mono">
								{formatCurrency(a.interest)}
							</td>
							<td className="py-2 text-right font-mono">
								{formatPercent(a.effectiveRate)}
							</td>
							{onExclude && (
								<td className="py-2 pl-4 text-center">
									<button
										type="button"
										title={`Exclude ${a.product.name}`}
										onClick={() => onExclude(a.product.id)}
										className="text-gray-400 hover:text-red-500 transition-colors"
									>
										<svg
											className="w-4 h-4 inline"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
											aria-hidden="true"
										>
											<title>Exclude</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr className="border-t-2 border-gray-300 font-semibold">
						<td className="py-2 pr-4">{cms.allocation.total}</td>
						<td className="py-2 pr-4 text-right font-mono">
							{formatCurrency(totalAmount)}
						</td>
						<td className="py-2 pr-4 text-right font-mono">
							{formatCurrency(totalInterest)}
						</td>
						<td className="py-2 text-right font-mono">
							{formatPercent(overallRate)}
						</td>
						{onExclude && <td />}
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
