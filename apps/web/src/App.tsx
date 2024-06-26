import { useQuery } from '@tanstack/react-query'
import { Container } from './components/Container'

import { Dashboard } from './layout/Dashboard'
import { DataTable } from './layout/DataTable'
import { columns } from './layout/DataTable/columns'
import { getTableData } from './services/getTableData.service'
import { Invoice } from './layout/DataTable/data'

function App() {
	const queryData = useQuery({
		queryKey: ['invoices'],
		queryFn: getTableData,
	})

	const invoices = queryData?.data || [] as Invoice[]

	return (
		<div className="w-full flex justify-center px-16">
			<Container className="mt-12">
				<h1 className="text-2xl text-green font-bold">Dashboard</h1>

				<div className="w-full mt-8">
					<Dashboard />
				</div>
				<div className="my-8">
					<DataTable columns={columns} data={invoices} />
				</div>
			</Container>
		</div>
	)
}

export default App
