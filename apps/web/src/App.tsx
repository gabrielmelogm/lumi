import { Container } from './components/Container'

import { Dashboard } from './layout/Dashboard'
import { DataTable } from './layout/DataTable'
import { columns } from './layout/DataTable/columns'
import { invoices } from './layout/DataTable/data'

function App() {
	return (
		<div className="w-full flex justify-center">
			<Container className="mt-12">
				<h1 className="text-2xl text-green font-bold">Dashboard</h1>

				<div className="w-full mt-8">
					<Dashboard />
				</div>
				<div className="mt-8">
					<DataTable columns={columns} data={invoices} />
				</div>
			</Container>
		</div>
	)
}

export default App
