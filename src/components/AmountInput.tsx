import { useEffect, useState } from "react";
import { cms } from "../constants/index.ts";

function formatWithCommas(value: string): string {
	const digits = value.replace(/[^\d]/g, "");
	return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function AmountInput({
	value,
	onChange,
	id = "amount-input",
	label = cms.amountInput.defaultLabel,
}: {
	value: number | null;
	onChange: (value: number | null) => void;
	id?: string;
	label?: string;
}) {
	const [display, setDisplay] = useState(
		value != null ? formatWithCommas(String(value)) : "",
	);

	useEffect(() => {
		const current = display.replace(/,/g, "");
		const expected = value != null ? String(value) : "";
		if (current !== expected) {
			setDisplay(value != null ? formatWithCommas(String(value)) : "");
		}
	}, [value, display]);

	return (
		<div className="flex items-center gap-2">
			<label htmlFor={id} className="text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				id={id}
				type="text"
				inputMode="numeric"
				placeholder={cms.amountInput.placeholder}
				value={display}
				onChange={(e) => {
					const raw = e.target.value.replace(/[^\d,]/g, "");
					const formatted = formatWithCommas(raw);
					setDisplay(formatted);
					const digits = formatted.replace(/,/g, "");
					if (digits === "") {
						onChange(null);
					} else {
						onChange(Number(digits));
					}
				}}
				className="border border-gray-300 rounded-md px-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
}
