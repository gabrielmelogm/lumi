import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, it, vitest } from 'vitest'
import { pdfMetadata } from '../@types/pdfMetadata'
import { Pdf } from '../contracts/pdf'

const mockExtractPdf: pdfMetadata = {
	n_client: faker.string.numeric(10),
	month: 'DEZ/2023',
	compensatedEnergy: {
		qtd: faker.number.int(),
		total: faker.number.float(),
	},
	electricity: {
		qtd: faker.number.int(),
		total: faker.number.float(),
	},
	exemptEnergy: {
		qtd: faker.number.int(),
		total: faker.number.float(),
	},
	contribution: faker.number.float(),
	filename: `${faker.string.uuid()}.pdf`,
	total: faker.number.float(),
}

describe('Extract', () => {
	it('should be able extract all data', async () => {
		const file = Buffer.from(faker.string.alphanumeric())

		const pdfService: Pdf = {
			Extract: vitest.fn().mockResolvedValue(mockExtractPdf),
		}

		await expect(pdfService.Extract(file)).resolves.toEqual(mockExtractPdf)
	})
})
