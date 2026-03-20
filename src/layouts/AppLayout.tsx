import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<header className="bg-white shadow-sm border-b border-gray-200">
				<div className="container mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
					<a href="#/" className="text-xl font-bold text-gray-900">
						Thai Bank Interest Optimizer
					</a>
					<nav className="flex gap-4">
						<a
							href="#/"
							className="text-sm font-medium text-gray-600 hover:text-gray-900"
						>
							Products
						</a>
						<a
							href="#/optimize"
							className="text-sm font-medium text-gray-600 hover:text-gray-900"
						>
							Optimizer
						</a>
					</nav>
				</div>
			</header>
			<main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
				{children}
			</main>
			<footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
				Thai Bank Interest Optimization — For educational purposes only
			</footer>
		</div>
	);
}
