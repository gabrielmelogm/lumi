import { ColumnDef } from '@tanstack/react-table'
import { Invoice } from './data'

export const columns: ColumnDef<Invoice>[] = [
	{
		header: 'Nº Cliente',
		cell: ({ row }) => {
			const cell = row.original
			return cell.Owner.n_client
		},
	},
	{
		accessorKey: 'electricity_qtd',
		header: 'Consumo (kWh)',
	},
	{
		accessorKey: 'compensatedEnergy_qtd',
		header: 'Compensado (kWh)',
	},
	{
		accessorKey: 'total',
		header: 'Total (R$)',
	},
]
