import { useMemo, useState } from "react";
import { optimizeAllocation } from "../../calculator/index.ts";
import { products } from "../../products/index.ts";
import AllocationResult from "../AllocationResult.tsx";
import AmountInput from "../AmountInput.tsx";
import ProductFilter, {
	applyFilter,
	createDefaultFilter,
	type ProductFilterState,
} from "../ProductFilter.tsx";

export default function OptimizerPage() {
	const [amount, setAmount] = useState<number | null>(null);
	const [filter, setFilter] = useState<ProductFilterState>(() =>
		createDefaultFilter(products),
	);

	const filteredProducts = useMemo(
		() => applyFilter(products, filter),
		[filter],
	);

	const allocations = useMemo(() => {
		if (amount === null || amount <= 0) return [];
		return optimizeAllocation(filteredProducts, amount);
	}, [amount, filteredProducts]);

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">Interest Optimizer</h1>
			<p className="text-sm text-gray-600">
				Enter your total deposit amount to see the optimal split across products
				that maximizes your interest returns.
			</p>
			<div className="bg-white rounded-lg shadow p-6 space-y-6">
				<AmountInput value={amount} onChange={setAmount} />
				<ProductFilter
					products={products}
					filter={filter}
					onChange={setFilter}
				/>
				<AllocationResult
					allocations={allocations}
					onExclude={(productId) =>
						setFilter((prev) => ({
							...prev,
							excludedProductIds: new Set([...prev.excludedProductIds, productId]),
						}))
					}
				/>
			</div>
		</div>
	);
}
