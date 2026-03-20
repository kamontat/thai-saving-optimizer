import type { Product } from "../models/types.ts";
import { products } from "../products/index.ts";

export function getProductsSortedByRate(): Product[] {
	return [...products].sort((a, b) => b.headlineRate - a.headlineRate);
}

export function getProductById(id: string): Product | undefined {
	return products.find((p) => p.id === id);
}
