import { useMemo, useState } from "react";
import type { Product } from "../models/types.ts";

export interface ProductFilterState {
	types: Set<Product["type"]>;
	banks: Set<string>;
	tags: Set<string>;
	excludedProductIds: Set<string>;
}

export function createDefaultFilter(products: Product[]): ProductFilterState {
	const types = new Set<Product["type"]>();
	const banks = new Set<string>();
	for (const p of products) {
		types.add(p.type);
		banks.add(p.bank);
	}
	return { types, banks, tags: new Set(), excludedProductIds: new Set() };
}

export function applyFilter(
	products: Product[],
	filter: ProductFilterState,
): Product[] {
	return products.filter(
		(p) =>
			filter.types.has(p.type) &&
			filter.banks.has(p.bank) &&
			(filter.tags.size === 0 || p.tags.some((tag) => filter.tags.has(tag))) &&
			!filter.excludedProductIds.has(p.id),
	);
}

function toggleInSet<T>(set: Set<T>, value: T): Set<T> {
	const next = new Set(set);
	if (next.has(value)) {
		next.delete(value);
	} else {
		next.add(value);
	}
	return next;
}

const TYPE_LABELS: Record<Product["type"], string> = {
	savings: "Savings",
	"fixed-deposit": "Fixed Deposit",
	"long-term": "Long-term",
};

function ChevronIcon({ open }: { open: boolean }) {
	return (
		<svg
			className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			aria-hidden="true"
		>
			<title>Toggle</title>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}

function FilterSection({
	title,
	count,
	total,
	defaultOpen = false,
	children,
}: {
	title: string;
	count?: number;
	total?: number;
	defaultOpen?: boolean;
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState(defaultOpen);
	const hasActiveFilter =
		count !== undefined && total !== undefined && count !== total;

	return (
		<div className="border border-gray-200 rounded-lg overflow-hidden">
			<button
				type="button"
				onClick={() => setOpen(!open)}
				className="flex items-center justify-between w-full px-4 py-2.5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
			>
				<div className="flex items-center gap-2">
					<span className="text-sm font-medium text-gray-700">{title}</span>
					{hasActiveFilter && (
						<span className="text-xs font-medium px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
							{count}/{total}
						</span>
					)}
				</div>
				<ChevronIcon open={open} />
			</button>
			{open && (
				<div className="px-4 py-3 border-t border-gray-200">{children}</div>
			)}
		</div>
	);
}

export default function ProductFilter({
	products,
	filter,
	onChange,
	showProductSelector = true,
}: {
	products: Product[];
	filter: ProductFilterState;
	onChange: (filter: ProductFilterState) => void;
	showProductSelector?: boolean;
}) {
	const [panelOpen, setPanelOpen] = useState(true);
	const [productSearch, setProductSearch] = useState("");

	const allTypes = useMemo(() => {
		const s = new Set<Product["type"]>();
		for (const p of products) s.add(p.type);
		return [...s];
	}, [products]);

	const allBanks = useMemo(() => {
		const s = new Set<string>();
		for (const p of products) s.add(p.bank);
		return [...s].sort();
	}, [products]);

	const allTags = useMemo(() => {
		const s = new Set<string>();
		for (const p of products) {
			for (const t of p.tags) s.add(t);
		}
		return [...s].sort();
	}, [products]);

	const visibleProducts = useMemo(
		() =>
			products.filter(
				(p) =>
					filter.types.has(p.type) &&
					filter.banks.has(p.bank) &&
					(filter.tags.size === 0 ||
						p.tags.some((tag) => filter.tags.has(tag))),
			),
		[products, filter.types, filter.banks, filter.tags],
	);

	const filteredProducts = useMemo(() => {
		if (!productSearch.trim()) return visibleProducts;
		const q = productSearch.toLowerCase();
		return visibleProducts.filter(
			(p) =>
				p.name.toLowerCase().includes(q) || p.bank.toLowerCase().includes(q),
		);
	}, [visibleProducts, productSearch]);

	const activeFilterCount =
		(filter.types.size < allTypes.length ? 1 : 0) +
		(filter.banks.size < allBanks.length ? 1 : 0) +
		(filter.tags.size > 0 ? 1 : 0) +
		(showProductSelector && filter.excludedProductIds.size > 0 ? 1 : 0);

	return (
		<div>
			{/* Panel header */}
			<button
				type="button"
				onClick={() => setPanelOpen(!panelOpen)}
				className="flex items-center justify-between w-full mb-3"
			>
				<div className="flex items-center gap-2">
					<svg
						className="w-4 h-4 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						aria-hidden="true"
					>
						<title>Filter</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
						/>
					</svg>
					<span className="text-sm font-semibold text-gray-700">Filters</span>
					{activeFilterCount > 0 && (
						<span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-600 text-white">
							{activeFilterCount} active
						</span>
					)}
				</div>
				<ChevronIcon open={panelOpen} />
			</button>

			{/* Collapsible panel body */}
			{panelOpen && (
				<div className="space-y-2">
					{/* Type filter */}
					<FilterSection
						title="Product Type"
						count={filter.types.size}
						total={allTypes.length}
						defaultOpen
					>
						<div className="flex flex-wrap gap-x-4 gap-y-2">
							{allTypes.map((t) => (
								<label
									key={t}
									className="flex items-center gap-2 text-sm cursor-pointer select-none"
								>
									<input
										type="checkbox"
										checked={filter.types.has(t)}
										onChange={() =>
											onChange({
												...filter,
												types: toggleInSet(filter.types, t),
											})
										}
										className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									{TYPE_LABELS[t]}
								</label>
							))}
						</div>
					</FilterSection>

					{/* Bank filter */}
					<FilterSection
						title="Bank"
						count={filter.banks.size}
						total={allBanks.length}
					>
						<div className="flex flex-wrap gap-x-4 gap-y-2">
							{allBanks.map((b) => (
								<label
									key={b}
									className="flex items-center gap-2 text-sm cursor-pointer select-none"
								>
									<input
										type="checkbox"
										checked={filter.banks.has(b)}
										onChange={() =>
											onChange({
												...filter,
												banks: toggleInSet(filter.banks, b),
											})
										}
										className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
									/>
									{b}
								</label>
							))}
						</div>
					</FilterSection>

					{/* Tag filter */}
					{allTags.length > 0 && (
						<FilterSection
							title="Tags"
							count={filter.tags.size > 0 ? filter.tags.size : undefined}
							total={filter.tags.size > 0 ? allTags.length : undefined}
						>
							<div className="flex flex-wrap gap-2">
								{allTags.map((tag) => (
									<button
										key={tag}
										type="button"
										onClick={() =>
											onChange({
												...filter,
												tags: toggleInSet(filter.tags, tag),
											})
										}
										className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
											filter.tags.has(tag)
												? "bg-blue-100 border-blue-300 text-blue-800 shadow-sm"
												: "bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
										}`}
									>
										{tag}
									</button>
								))}
							</div>
							{filter.tags.size > 0 && (
								<button
									type="button"
									onClick={() => onChange({ ...filter, tags: new Set() })}
									className="text-xs text-blue-600 hover:text-blue-800 hover:underline mt-2"
								>
									Clear tags
								</button>
							)}
						</FilterSection>
					)}

					{/* Individual product toggles */}
					{showProductSelector && (
						<FilterSection
							title="Products"
							count={visibleProducts.length - filter.excludedProductIds.size}
							total={visibleProducts.length}
						>
							<div className="relative mb-2">
								<input
									type="text"
									value={productSearch}
									onChange={(e) => setProductSearch(e.target.value)}
									placeholder="Search products…"
									className="w-full text-sm pl-8 pr-3 py-1.5 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
								/>
								<svg
									className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
									aria-hidden="true"
								>
									<title>Search</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							<div className="flex items-center justify-end gap-3 mb-2">
								<button
									type="button"
									onClick={() =>
										onChange({ ...filter, excludedProductIds: new Set() })
									}
									className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline"
								>
									Select All
								</button>
								<button
									type="button"
									onClick={() =>
										onChange({
											...filter,
											excludedProductIds: new Set(products.map((p) => p.id)),
										})
									}
									className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline"
								>
									Deselect All
								</button>
							</div>
							<div className="max-h-48 overflow-y-auto rounded-md border border-gray-100 bg-gray-50/50 divide-y divide-gray-100">
								{filteredProducts.map((p) => (
									<label
										key={p.id}
										className="flex items-center gap-2 text-sm cursor-pointer hover:bg-blue-50/50 px-3 py-1.5 transition-colors"
									>
										<input
											type="checkbox"
											checked={!filter.excludedProductIds.has(p.id)}
											onChange={() =>
												onChange({
													...filter,
													excludedProductIds: toggleInSet(
														filter.excludedProductIds,
														p.id,
													),
												})
											}
											className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
										/>
										<span className="truncate">{p.name}</span>
										<span className="text-xs text-gray-400 ml-auto shrink-0 font-mono">
											{p.headlineRate}%
										</span>
									</label>
								))}
								{filteredProducts.length === 0 && (
									<p className="text-xs text-gray-400 text-center py-4">
										{productSearch.trim()
											? "No products match your search."
											: "No products match the current type/bank filters."}
									</p>
								)}
							</div>
						</FilterSection>
					)}
				</div>
			)}
		</div>
	);
}
