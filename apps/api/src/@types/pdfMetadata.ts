type dataValues = {
	qtd: number
	total: number
}

export interface pdfMetadata {
	n_client: string
	month: string
	electricity: dataValues
	exemptEnergy: dataValues
	compensatedEnergy: dataValues
	contribution: number
	total: number
	filename: string
}
