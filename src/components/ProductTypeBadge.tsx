export default function ProductTypeBadge({
	type,
}: {
	type: "savings" | "fixed-deposit" | "long-term";
}) {
	const label =
		type === "savings"
			? "Savings"
			: type === "fixed-deposit"
				? "Fixed Deposit"
				: "Long-term";
	const className =
		type === "savings"
			? "bg-green-100 text-green-800"
			: type === "fixed-deposit"
				? "bg-blue-100 text-blue-800"
				: "bg-purple-100 text-purple-800";

	return (
		<span
			className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${className}`}
		>
			{label}
		</span>
	);
}
