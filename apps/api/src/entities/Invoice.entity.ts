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
	private props: InvoiceProps
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
		this.props = props
		this.id = props.id
		this.month = props.month
		this.electricity_qtd = props.electricity_qtd
		this.electricity_total = props.electricity_total
		this.exemptEnergy_qtd = props.exemptEnergy_qtd
		this.exemptEnergy_total = props.exemptEnergy_total
		this.compensatedEnergy_qtd = props.compensatedEnergy_qtd
		this.compensatedEnergy_total = props.compensatedEnergy_total
		this.contribution = props.contribution
		this.total = props.total
	}
}
