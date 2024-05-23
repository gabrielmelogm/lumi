import { z } from 'zod'

export interface InvoiceProps {
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
}

export class Invoice {
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

	constructor(props: InvoiceProps) {
		const invoiceSchema = z.object({
			id: z.string(),
			month: z.string(),
			electricity_qtd: z.number(),
			electricity_total: z.number(),
			exemptEnergy_qtd: z.number(),
			exemptEnergy_total: z.number(),
			compensatedEnergy_qtd: z.number(),
			compensatedEnergy_total: z.number(),
			contribution: z.number(),
			total: z.number(),
		})

		const invoice = invoiceSchema.parse(props)

		this.id = invoice.id
		this.month = invoice.month
		this.electricity_qtd = invoice.electricity_qtd
		this.electricity_total = invoice.electricity_total
		this.exemptEnergy_qtd = invoice.exemptEnergy_qtd
		this.exemptEnergy_total = invoice.exemptEnergy_total
		this.compensatedEnergy_qtd = invoice.compensatedEnergy_qtd
		this.compensatedEnergy_total = invoice.compensatedEnergy_total
		this.contribution = invoice.contribution
		this.total = invoice.total
	}
}
