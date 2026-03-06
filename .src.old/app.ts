import { calculates } from "./lib/calculation"
import { createGraph } from "./lib/graph"

const data = calculates(1, 1_000_000, 1)
console.log("Calculation length: ", data.length)
console.table(data.slice(0, 20))

document.getElementById("container")?.append(
	createGraph({
		width: 1440,
		height: 500,
		marginTop: 20,
		marginRight: 20,
		marginBottom: 30,
		marginLeft: 40,
		data,
	}),
)
