import { PRODUCT_TYPES, type ProductType } from "../constants/index.ts";

const TYPE_COLORS: Record<ProductType, string> = {
	savings: "bg-green-100 text-green-800",
	"fixed-deposit": "bg-blue-100 text-blue-800",
	"long-term": "bg-purple-100 text-purple-800",
};

export default function ProductTypeBadge({ type }: { type: ProductType }) {
	return (
		<span
			className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${TYPE_COLORS[type]}`}
		>
			{PRODUCT_TYPES[type]}
		</span>
	);
}
