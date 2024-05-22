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
	Owner: {
		id: string
		n_client: string
	}
}

export const invoices: Invoice[] = [
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
	{
		id: 'asoakskoas',
		month: new Date().toDateString(),
		electricity_qtd: 5,
		electricity_total: 150.5,
		exemptEnergy_qtd: 30,
		exemptEnergy_total: 300.6,
		compensatedEnergy_qtd: 60,
		compensatedEnergy_total: 80.3,
		contribution: 50,
		total: 413.8,
		filename: 'unknown.pdf',
		Owner: {
			id: 'aksoakskaskas',
			n_client: '04844844515',
		},
	},
]
