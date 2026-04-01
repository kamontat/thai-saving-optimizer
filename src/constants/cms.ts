export const cms = {
	app: {
		title: "Thai Bank Interest Optimizer",
		footer: "Thai Bank Interest Optimization — For educational purposes only",
	},
	nav: {
		products: "Products",
		optimizer: "Optimizer",
	},
	optimizer: {
		title: "Interest Optimizer",
		description:
			"Enter your total deposit amount to see the optimal split across products that maximizes your interest returns.",
	},
	productList: {
		title: "Savings & Deposit Products",
		columns: {
			product: "Product",
			bank: "Bank",
			headlineRate: "Headline Rate",
			type: "Type",
			updated: "Updated",
		},
		emptyState: "No products match the current filters.",
		pagination: {
			previous: "Previous",
			next: "Next",
		},
	},
	productDetail: {
		notFound: "Product not found.",
		backToProducts: "← Back to products",
		productInfo: "Product Information",
		interestTiers: "Interest Tiers",
		tierColumns: {
			min: "Min (THB)",
			max: "Max (THB)",
			rate: "Rate",
		},
		conditions: "Conditions",
		lastUpdated: "Data last updated:",
		tryCalculator: {
			title: "Try It — Calculate Interest",
			depositLabel: "Deposit Amount (THB):",
			annualInterest: "Annual Interest:",
			effectiveRate: "Effective Rate:",
		},
		officialLink: "View official product page →",
		termLength: "Term Length",
		minDeposit: "Min Deposit",
		maxDeposit: "Max Deposit",
	},
	allocation: {
		emptyState: "No allocations to display. Enter an amount above.",
		columns: {
			product: "Product",
			amount: "Amount",
			annualInterest: "Annual Interest",
			effectiveRate: "Effective Rate",
		},
		total: "Total",
	},
	amountInput: {
		defaultLabel: "Amount (THB):",
		placeholder: "e.g. 100,000",
	},
	filter: {
		title: "Filters",
		active: "active",
		productType: "Product Type",
		bank: "Bank",
		tags: "Tags",
		products: "Products",
		searchPlaceholder: "Search products…",
		selectAll: "Select All",
		deselectAll: "Deselect All",
		clearTags: "Clear tags",
		noMatchSearch: "No products match your search.",
		noMatchFilter: "No products match the current type/bank filters.",
	},
	metadata: {
		officialName: "Official Name",
		productCategory: "Category",
		interestCalculation: "Interest Calculation",
		payoutFrequency: "Payout Frequency",
		insuranceNote: "Insurance",
		promotionEnd: "Promotion Ends",
		notes: "Notes",
	},
} as const;

export type MetadataKey = keyof typeof cms.metadata;
