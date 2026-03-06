import {
	calculate,
	calculateInterest,
	calculatePercent,
} from "./lib/calculation"
import { findMaxAmountForPercent, findPercentByAmount } from "./lib/core"

const [command, value] = process.argv.slice(2)

if (command === "by-percent") {
	if (!value) throw new Error("Value is required for by-percent command")
	const percent = Number.parseFloat(value)
	console.log(findMaxAmountForPercent(percent))
} else if (command === "by-amount") {
	if (!value) throw new Error("Value is required for by-amount command")
	const amount = Number.parseFloat(value)
	console.log(findPercentByAmount(amount))
} else {
	console.log(
		"Unknown command. Use 'by-percent' or 'by-amount'. Instead got:",
		command,
	)
}

// const interest = calculateInterest(3029999)
// const percent = calculatePercent(3029999, interest)
// console.log("Interest at 3,029,998:", interest)
// console.log("Percent at 3,029,998:", percent)
