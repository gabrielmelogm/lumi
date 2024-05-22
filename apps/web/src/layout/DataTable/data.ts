import { getTableData } from '@/services/getTableData.service'

export type Invoice = {
	id: string
	month: string
	electricity_qtd: number
	electricity_total: number
	exemptEnergy_qtd: number
	exemptEnergy_total: number
	compensatedEnergy_qtd: number
	compensatedEnergy_total: number
	contribution: number
	total: number
	filename: string
	n_client: string
}

export const invoices: Invoice[] = await getTableData()
