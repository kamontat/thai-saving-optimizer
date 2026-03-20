import { products } from "../../../../src/products/index.ts";

// Output a JSON summary of all products for validation
const summary = products.map((p) => ({
	id: p.id,
	type: p.type,
	name: p.name,
	bank: p.bank,
	headlineRate: p.headlineRate,
	tiers: p.tiers,
	minDeposit: p.minDeposit,
	maxDeposit: p.maxDeposit,
	url: p.url,
	effectiveDate: p.metadata.notes,
	promotionEnd: p.metadata.promotionEnd,
}));

console.log(JSON.stringify(summary, null, 2));
