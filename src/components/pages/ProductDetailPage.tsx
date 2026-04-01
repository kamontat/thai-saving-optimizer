import { useState } from "react";
import {
	calculateProductInterest,
	formatCurrency,
	formatPercent,
	getProductById,
} from "../../calculator/index.ts";
import AmountInput from "../AmountInput.tsx";
import ProductTypeBadge from "../ProductTypeBadge.tsx";

export default function ProductDetailPage({ id }: { id: string }) {
	const product = getProductById(id);
	const [tryAmount, setTryAmount] = useState<number | null>(null);

	if (!product) {
		return (
			<div>
				<p className="text-gray-500">Product not found.</p>
				<a href="#/" className="text-blue-600 hover:underline text-sm">
					← Back to products
				</a>
			</div>
		);
	}

	const interest =
		tryAmount !== null && tryAmount > 0
			? calculateProductInterest(product, tryAmount)
			: null;
	const effectiveRate =
		interest !== null && tryAmount !== null && tryAmount > 0
			? (interest / tryAmount) * 100
			: null;

	return (
		<div className="space-y-6">
			<a href="#/" className="text-blue-600 hover:underline text-sm">
				← Back to products
			</a>

			{/* Header */}
			<div className="bg-white rounded-lg shadow p-6">
				<div className="flex items-start justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
						<p className="text-gray-600 mt-1">{product.bank}</p>
						{product.metadata.officialName && (
							<p className="text-sm text-gray-500 mt-1">
								{product.metadata.officialName}
							</p>
						)}
					</div>
					<div className="text-right">
						<div className="text-3xl font-bold text-green-700">
							{formatPercent(product.headlineRate)}
						</div>
						<ProductTypeBadge type={product.type} />
					</div>
				</div>
				{product.tags.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-3">
						{product.tags.map((tag) => (
							<span
								key={tag}
								className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
							>
								{tag}
							</span>
						))}
					</div>
				)}
				<p className="text-sm text-gray-700 mt-4">{product.description}</p>
			</div>

			{/* Info section */}
			<div className="bg-white rounded-lg shadow p-6 space-y-3">
				<h2 className="text-lg font-semibold text-gray-900">
					Product Information
				</h2>
				<dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
					<div>
						<dt className="text-gray-500">Category</dt>
						<dd className="text-gray-900">
							{product.metadata.productCategory}
						</dd>
					</div>
					<div>
						<dt className="text-gray-500">Interest Calculation</dt>
						<dd className="text-gray-900">
							{product.metadata.interestCalculation}
						</dd>
					</div>
					<div>
						<dt className="text-gray-500">Payout Frequency</dt>
						<dd className="text-gray-900">
							{product.metadata.payoutFrequency}
						</dd>
					</div>
					{product.metadata.insuranceNote && (
						<div>
							<dt className="text-gray-500">Insurance</dt>
							<dd className="text-gray-900">
								{product.metadata.insuranceNote}
							</dd>
						</div>
					)}
					{product.metadata.promotionEnd && (
						<div>
							<dt className="text-gray-500">Promotion Ends</dt>
							<dd className="text-gray-900">{product.metadata.promotionEnd}</dd>
						</div>
					)}
					{(product.type === "fixed-deposit" ||
						product.type === "long-term") && (
						<>
							<div>
								<dt className="text-gray-500">Term Length</dt>
								<dd className="text-gray-900">{product.termMonths} months</dd>
							</div>
							{product.minDeposit !== undefined && (
								<div>
									<dt className="text-gray-500">Min Deposit</dt>
									<dd className="text-gray-900">
										{formatCurrency(product.minDeposit)}
									</dd>
								</div>
							)}
							{product.maxDeposit !== undefined && (
								<div>
									<dt className="text-gray-500">Max Deposit</dt>
									<dd className="text-gray-900">
										{formatCurrency(product.maxDeposit)}
									</dd>
								</div>
							)}
						</>
					)}
				</dl>
			</div>

			{/* Tier table */}
			<div className="bg-white rounded-lg shadow p-6">
				<h2 className="text-lg font-semibold text-gray-900 mb-3">
					Interest Tiers
				</h2>
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-gray-200 text-left text-gray-600">
							<th className="py-2 pr-4">Min (THB)</th>
							<th className="py-2 pr-4">Max (THB)</th>
							<th className="py-2 text-right">Rate</th>
						</tr>
					</thead>
					<tbody>
						{product.tiers.map((tier) => (
							<tr
								key={`${tier.min}-${tier.max}`}
								className="border-b border-gray-100"
							>
								<td className="py-2 pr-4 font-mono">
									{formatCurrency(tier.min)}
								</td>
								<td className="py-2 pr-4 font-mono">
									{tier.max === Number.POSITIVE_INFINITY
										? "∞"
										: formatCurrency(tier.max)}
								</td>
								<td className="py-2 text-right font-mono font-semibold text-green-700">
									{formatPercent(tier.rate)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Conditions */}
			{product.conditions && product.conditions.length > 0 && (
				<div className="bg-white rounded-lg shadow p-6">
					<h2 className="text-lg font-semibold text-gray-900 mb-3">
						Conditions
					</h2>
					<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
						{product.conditions.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
				</div>
			)}

			{/* Notes */}
			{product.metadata.notes && (
				<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
					{product.metadata.notes}
				</div>
			)}

			{/* Last updated */}
			<p className="text-xs text-gray-400">
				Data last updated: {product.updatedAt}
			</p>

			{/* Try-it calculator */}
			<div className="bg-white rounded-lg shadow p-6">
				<h2 className="text-lg font-semibold text-gray-900 mb-3">
					Try It — Calculate Interest
				</h2>
				<AmountInput
					id="try-amount"
					label="Deposit Amount (THB):"
					value={tryAmount}
					onChange={setTryAmount}
				/>
				{interest !== null && effectiveRate !== null && (
					<div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
						<p className="text-sm text-gray-700">
							Annual Interest:{" "}
							<span className="font-semibold text-green-700">
								{formatCurrency(interest)}
							</span>
						</p>
						<p className="text-sm text-gray-700">
							Effective Rate:{" "}
							<span className="font-semibold text-green-700">
								{formatPercent(effectiveRate)}
							</span>
						</p>
					</div>
				)}
			</div>

			{/* Official link */}
			<div className="text-sm">
				<a
					href={product.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline"
				>
					View official product page →
				</a>
			</div>
		</div>
	);
}
