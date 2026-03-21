import { useMemo, useState } from "react";
import { formatPercent } from "../../calculator/index.ts";
import { products } from "../../products/index.ts";
import ProductFilter, {
	applyFilter,
	createDefaultFilter,
	type ProductFilterState,
} from "../ProductFilter.tsx";
import ProductTypeBadge from "../ProductTypeBadge.tsx";

const PAGE_SIZE = 10;

export default function ProductListPage() {
	const [filter, setFilter] = useState<ProductFilterState>(() =>
		createDefaultFilter(products),
	);
	const [page, setPage] = useState(0);

	const filteredProducts = useMemo(() => {
		const filtered = applyFilter(products, filter);
		return [...filtered].sort((a, b) => b.headlineRate - a.headlineRate);
	}, [filter]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredProducts.length / PAGE_SIZE),
	);
	const safeePage = Math.min(page, totalPages - 1);
	const pageProducts = filteredProducts.slice(
		safeePage * PAGE_SIZE,
		(safeePage + 1) * PAGE_SIZE,
	);

	// Reset to first page when filter changes
	const handleFilterChange = (f: ProductFilterState) => {
		setFilter(f);
		setPage(0);
	};

	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold text-gray-900">
				Savings &amp; Deposit Products
			</h1>
			<div className="bg-white rounded-lg shadow p-6">
				<ProductFilter
					products={products}
					filter={filter}
					onChange={handleFilterChange}
					showProductSelector={false}
				/>
			</div>
			<div className="bg-white rounded-lg shadow overflow-hidden">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-gray-200 bg-gray-50 text-left text-gray-600">
							<th className="py-3 px-4">Product</th>
							<th className="py-3 px-4">Bank</th>
							<th className="py-3 px-4 text-right">Headline Rate</th>
							<th className="py-3 px-4">Type</th>
						</tr>
					</thead>
					<tbody>
						{pageProducts.map((product) => (
							<tr
								key={product.id}
								className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
								onClick={() => {
									window.location.hash = `#/product/${product.id}`;
								}}
							>
								<td className="py-3 px-4 font-medium text-blue-600">
									{product.name}
								</td>
								<td className="py-3 px-4 text-gray-600">{product.bank}</td>
								<td className="py-3 px-4 text-right font-mono font-semibold text-green-700">
									{formatPercent(product.headlineRate)}
								</td>
								<td className="py-3 px-4">
									<ProductTypeBadge type={product.type} />
								</td>
							</tr>
						))}
						{pageProducts.length === 0 && (
							<tr>
								<td colSpan={4} className="py-8 text-center text-gray-400">
									No products match the current filters.
								</td>
							</tr>
						)}
					</tbody>
				</table>
				{/* Pagination */}
				<div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 text-sm">
					<span className="text-gray-500">
						{filteredProducts.length} product
						{filteredProducts.length !== 1 && "s"}
					</span>
					{totalPages > 1 && (
						<div className="flex items-center gap-2">
							<button
								type="button"
								disabled={safeePage === 0}
								onClick={() => setPage(safeePage - 1)}
								className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
							>
								Previous
							</button>
							<span className="text-gray-600">
								Page {safeePage + 1} of {totalPages}
							</span>
							<button
								type="button"
								disabled={safeePage >= totalPages - 1}
								onClick={() => setPage(safeePage + 1)}
								className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
							>
								Next
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
