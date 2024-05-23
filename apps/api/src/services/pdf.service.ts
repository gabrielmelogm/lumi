import pdf from 'pdf-parse'
import { pdfMetadata } from '../@types/pdfMetadata'
import { Pdf } from '../contracts/pdf'

export class PdfParse implements Pdf {
	async Extract(dataFile: Buffer): Promise<Partial<pdfMetadata> | undefined> {
		const metadata: Partial<pdfMetadata> | undefined = await pdf(dataFile)
			.then((data) => {
				const fullText = data.text
				const lines: string[] = fullText
					.split('\n')
					.map((line) => line.trim())
					.filter((line) => line.length > 0)

				// Nº Client
				const numberClient = lines[
					lines.findIndex((line) => line.includes('Nº DO CLIENTE')) + 1
				]
					.split(' ')
					.shift()

				// Mês referente
				const month = lines[
					lines.findIndex((line) => line.includes('Referente a')) + 1
				]
					.split(' ')
					.shift()

				// Energia Elétrica
				const electricity: string[] | undefined = lines
					.find((line) => line.includes('Energia ElétricakWh'))
					?.split(' ')
					.filter((row) => row !== '')

				const dataElectricity: { qtd: number; total: number } = {
					qtd: 0,
					total: 0,
				}

				if (electricity) {
					dataElectricity.qtd = Number.parseInt(electricity[2].replace('.', ''))
					dataElectricity.total = Number.parseFloat(
						electricity[4].replace(',', '.'),
					)
				}

				// Energia SCEE ISENTA
				// const exemptEnergy: string[] | undefined = lines
				// 	.find((line) => line.includes('Energia SCEE ISENTA'))
				// 	?.split(' ')
				// 	.filter((row) => row !== '')

				const exemptEnergy: string[] | undefined = lines
					.find((line) => line.includes('Energia SCEE s/ ICMS'))
					?.split(' ')
					.filter((row) => row !== '')

				const dataExemptEnergy: { qtd: number; total: number } = {
					qtd: 0,
					total: 0,
				}

				// if (exemptEnergy) {
				// 	dataExemptEnergy.qtd = Number.parseInt(
				// 		exemptEnergy[3].replace('.', ''),
				// 	)
				// 	dataExemptEnergy.total = Number.parseFloat(
				// 		exemptEnergy[5].replace(',', '.'),
				// 	)
				// }

				if (exemptEnergy) {
					dataExemptEnergy.qtd = Number.parseInt(
						exemptEnergy[4].replace('.', ''),
					)
					dataExemptEnergy.total = Number.parseFloat(
						exemptEnergy[6].replace(',', '.'),
					)
				}

				// Energia Compensada GD I
				const compensatedEnergy: string[] | undefined = lines
					.find((line) => line.includes('Energia compensada GD I'))
					?.split(' ')
					.filter((row) => row !== '')

				const dataCompensatedEnergy = {
					qtd: 0,
					total: 0,
				}

				if (compensatedEnergy) {
					dataCompensatedEnergy.qtd = Number.parseInt(
						compensatedEnergy[4].replace('.', ''),
					)
					dataCompensatedEnergy.total = Number.parseFloat(
						compensatedEnergy[6].replace(',', '.'),
					)
				}

				// Contrib Ilum Publica Municipal
				const contribution: string[] | undefined = lines
					.find((line) => line.includes('Contrib Ilum Publica Municipal'))
					?.split(' ')
					.filter((row) => row !== '')

				const valueContribution: number | undefined = Number.parseFloat(
					contribution?.pop()?.replace(',', '.') ?? '0',
				)

				// Total
				const total: string[] | undefined = lines
					.find((line) => line.includes('TOTAL'))
					?.split(' ')
					.filter((row) => row !== '')

				let valueTotal = 0

				if (total) {
					valueTotal = Number.parseFloat(total[1].replace(',', '.'))
				}

				// Data
				return {
					n_client: numberClient,
					month,
					electricity: dataElectricity,
					exemptEnergy: dataExemptEnergy,
					compensatedEnergy: dataCompensatedEnergy,
					contribution: valueContribution,
					total: valueTotal,
				}
			})
			.catch((error) => {
				console.error('Error on read PDF:', error)
				return undefined
			})

		return metadata
	}
}
