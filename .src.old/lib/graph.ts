import {
	axisBottom,
	axisLeft,
	bisect,
	create,
	extent,
	line,
	pointer,
	scaleLinear,
} from "d3"

export interface GraphData {
	amount: number
	interest: number
	percent: number
}

export interface GraphConfig {
	width: number
	height: number
	marginTop: number
	marginRight: number
	marginBottom: number
	marginLeft: number
	data: GraphData[]
}

export const createGraph = ({
	width,
	height,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	data,
}: GraphConfig) => {
	const x = scaleLinear()
		.domain(extent(data, (d) => d.amount) as [number, number])
		.range([marginLeft, width - marginRight])
	const y = scaleLinear()
		.domain(extent(data, (d) => d.percent) as [number, number])
		.range([height - marginBottom, marginTop])
	const graph = line<GraphData>()
		.x((d) => x(d.amount))
		.y((d) => y(d.percent))

	const svg = create("svg")
		.attr("viewBox", [0, 0, width, height])
		.attr("width", width)
		.attr("height", height)
		.attr(
			"style",
			"max-width: 100%; height: auto; height: intrinsic; font: 10px sans-serif;",
		)
		.style("-webkit-tap-highlight-color", "transparent")
		.style("overflow", "visible")
		.on("pointerenter pointermove", pointermoved)
		.on("pointerleave", pointerleft)
		.on("touchstart", (event) => event.preventDefault())

	// Add the x-axis.
	svg
		.append("g")
		.attr("transform", `translate(0,${height - marginBottom})`)
		.call(
			axisBottom(x)
				.ticks(width / 80)
				.tickSizeOuter(0),
		)

	// Add the y-axis, remove the domain line, add grid lines and a label.
	svg
		.append("g")
		.attr("transform", `translate(${marginLeft},0)`)
		.call(axisLeft(y).ticks(height / 40))
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g
				.selectAll(".tick line")
				.clone()
				.attr("x2", width - marginLeft - marginRight)
				.attr("stroke-opacity", 0.1),
		)
		.call((g) =>
			g
				.append("text")
				.attr("x", -marginLeft)
				.attr("y", 10)
				.attr("fill", "currentColor")
				.attr("text-anchor", "start")
				.text("↑ Daily Close ($)"),
		)

	// Append a path for the line.
	svg
		.append("path")
		.attr("fill", "none")
		.attr("stroke", "steelblue")
		.attr("stroke-width", 1.5)
		.attr("d", graph(data))

	// Create the tooltip container.
	const tooltip = svg.append("g")

	function pointermoved(event: unknown) {
		const i = bisect(
			data.map(({ amount }) => amount),
			x.invert(pointer(event)[0]),
		)
		const element = data[i]
		if (!element) return

		tooltip.style("display", null)
		tooltip.attr(
			"transform",
			`translate(${x(element.amount)},${y(element.percent)})`,
		)

		const path = tooltip
			.selectAll("path")
			.data([,])
			.join("path")
			.attr("fill", "white")
			.attr("stroke", "black")

		const text = tooltip
			.selectAll("text")
			.data([,])
			.join("text")
			.call((text) =>
				text
					.selectAll("tspan")
					.data([element.amount, element.percent])
					.join("tspan")
					.attr("x", 0)
					.attr("y", (_, i) => `${i * 1.1}em`)
					.attr("font-weight", (_, i) => (i ? null : "bold"))
					.text((d) => d),
			)

		size(text as unknown as typeof tooltip, path as unknown as typeof tooltip)
	}

	function pointerleft() {
		tooltip.style("display", "none")
	}

	// Wraps the text with a callout path of the correct size, as measured in the page.
	function size(text: typeof tooltip, path: typeof tooltip) {
		const { x, y, width: w, height: h } = text.node()!.getBBox()
		text.attr("transform", `translate(${-w / 2},${15 - y})`)
		path.attr(
			"d",
			`M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`,
		)
	}

	// biome-ignore lint/style/noNonNullAssertion: SVG node will be created
	return svg.node()!
}
