import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import moment from 'moment'
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
		accessorKey: 'month',
		header: 'Mês referente',
		cell: ({ row }) => {
			const month = moment(row.getValue('month')).local().format('MMM/YYYY')

			return month
		},
	},
	{
		accessorKey: 'n_client',
		header: 'Nº Cliente',
	},
	{
		header: 'Consumo de Energia Elétrica (kWh)',
		cell: ({ row }) => {
			const electricity_qtd = row.original.electricity_qtd || 0
			const exemptEnergy_qtd = row.original.exemptEnergy_qtd || 0

			return electricity_qtd + exemptEnergy_qtd
		},
	},
	{
		accessorKey: 'compensatedEnergy_qtd',
		header: 'Energia Compensada (kWh)',
	},
	{
		header: 'Valor total sem GD (R$)',
		cell: ({ row }) => {
			const electricity_total = row.original.electricity_total || 0
			const exemptEnergy_total = row.original.exemptEnergy_total || 0
			const contribution = row.original.contribution

			return new Intl.NumberFormat('pt-BR', {
				style: 'currency',
				currency: 'BRL',
			}).format(electricity_total + exemptEnergy_total + contribution)
		},
	},
]
