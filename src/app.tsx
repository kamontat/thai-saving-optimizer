import Router from "./components/Router.tsx";
import AppLayout from "./layouts/AppLayout.tsx";

export default function App() {
	return (
		<AppLayout>
			<Router />
		</AppLayout>
	);
}
