import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { Invoice } from './data'

export const columns: ColumnDef<Invoice>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				className="border-white"
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
	},
	{
		accessorKey: 'n_client',
		header: 'Nº Cliente',
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
