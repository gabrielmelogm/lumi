import { Container } from './components/Container'
import { Dashboard } from './layout/Dashboard'

function App() {
	return (
		<main className="w-full flex justify-center">
			<Container className="mt-12">
				<h1 className="text-2xl text-green font-bold">Dashboard</h1>

				<div className="w-full mt-8">
					<Dashboard />
				</div>
			</Container>
		</main>
	)
}

export default App
