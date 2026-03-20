import { useSyncExternalStore } from "react";
import OptimizerPage from "./pages/OptimizerPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ProductListPage from "./pages/ProductListPage.tsx";

function getHash(): string {
	return window.location.hash || "#/";
}

function subscribe(callback: () => void): () => void {
	window.addEventListener("hashchange", callback);
	return () => window.removeEventListener("hashchange", callback);
}

export default function Router() {
	const hash = useSyncExternalStore(subscribe, getHash);

	const productMatch = hash.match(/^#\/product\/(.+)$/);
	if (productMatch?.[1]) {
		return <ProductDetailPage id={productMatch[1]} />;
	}

	if (hash === "#/optimize") {
		return <OptimizerPage />;
	}

	return <ProductListPage />;
}
