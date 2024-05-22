import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { BiDownload } from 'react-icons/bi'
import { GrNext, GrPrevious } from 'react-icons/gr'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { useState } from 'react'
import { Invoice } from './data'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [columnFilters, setColumnsFilters] = useState<ColumnFiltersState>([])
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnFiltersChange: setColumnsFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			columnFilters,
			rowSelection,
		},
	})

	function getSelectedRows(): Invoice[] {
		const rows: Invoice[] = []
		for (const row of table.getFilteredSelectedRowModel().rows) {
			const rowData = row.original as Invoice
			rows.push(rowData)
		}
		return rows
	}

	return (
		<div>
			<div className="w-full flex items-center gap-2 py-4">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								className="text-xl p-3"
								type="button"
								onClick={() => getSelectedRows()}
								disabled={getSelectedRows().length === 0}
							>
								<BiDownload />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<span>Fazer download de {getSelectedRows().length} arquivos</span>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<Input
					placeholder="Filtrar clientes"
					value={
						(table.getColumn('n_client')?.getFilterValue() as string) ?? ''
					}
					onChange={(event) =>
						table.getColumn('n_client')?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
			</div>
			<div className="rounded-xl border shadow-lg">
				<Table>
					<TableHeader className="bg-green hover:bg-green-light hover:opacity-100">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead className="text-white font-bold" key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									className="text-dark-gray"
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow className="text-dark-gray">
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					<GrPrevious />
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					<GrNext />
				</Button>
			</div>
		</div>
	)
}
