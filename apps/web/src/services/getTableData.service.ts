import { Invoice } from '@/layout/DataTable/data'
import { api } from '@/lib/api'

export async function getTableData(): Promise<Invoice[] | []> {
	try {
		const response = await api.get('/invoices')

		const invoices = []

		for (const invoice of response.data) {
			const { Owner } = invoice
			invoices.push({ ...invoice, n_client: Owner.n_client })
		}
		return invoices
	} catch (error) {
		console.error(error)
		return []
	}
}
