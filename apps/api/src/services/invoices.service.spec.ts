import { fakerPT_BR as faker } from '@faker-js/faker'
import { beforeEach, describe, expect, it, vitest } from 'vitest'
import { pdfMetadata } from '../@types/pdfMetadata'
import { Pdf } from '../contracts/pdf'
import { Invoice } from '../entities/Invoice.entity'
import { Owner } from '../entities/Owner.entity'
import { InvoicesRepository } from '../repositories/invoices.repository'
import { OwnersRepository } from '../repositories/owners.repository'
import { InvoicesService } from './invoices.service'

describe('InvoicesService', () => {
	let invoicesService: InvoicesService
	let invoicesRepository: InvoicesRepository
	let ownersRepository: OwnersRepository
	let pdfService: Pdf

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

	const mockInvoice: Invoice = {
		id: faker.string.uuid(),
		month: 'DEZ/2023',
		electricity_qtd: faker.number.int(),
		electricity_total: faker.number.float(),
		exemptEnergy_qtd: faker.number.int(),
		exemptEnergy_total: faker.number.float(),
		compensatedEnergy_qtd: faker.number.int(),
		compensatedEnergy_total: faker.number.float(),
		contribution: faker.number.float(),
		total: faker.number.float(),
	}

	const mockListInvoice = [mockInvoice, mockInvoice, mockInvoice]

	const mockOwner: Owner = {
		id: faker.string.uuid(),
		n_client: faker.string.numeric(10),
	}

	beforeEach(() => {
		pdfService = {
			Extract: vitest.fn().mockResolvedValue(mockExtractPdf),
		} as unknown as Pdf

		invoicesRepository = {
			CreateInvoice: vitest.fn().mockResolvedValue(null),
			FindAll: vitest.fn().mockResolvedValue(mockListInvoice),
		} as unknown as InvoicesRepository

		ownersRepository = {
			GetOwner: vitest.fn().mockResolvedValue(null),
			CreateOwner: vitest.fn().mockResolvedValue(mockOwner),
		} as unknown as OwnersRepository

		invoicesService = new InvoicesService(
			invoicesRepository,
			ownersRepository,
			pdfService,
		)
	})

	describe('CreateInvoice', () => {
		it('should create an invoice with existing owner', async () => {
			vitest.spyOn(ownersRepository, 'GetOwner').mockResolvedValue(mockOwner)

			const result = await invoicesService.CreateInvoice(
				Buffer.from(faker.string.alphanumeric()),
				'file.pdf',
			)
			expect(result).toEqual(null)
		})

		it('should create an invoice with new owner', async () => {
			const result = await invoicesService.CreateInvoice(
				Buffer.from(faker.string.alphanumeric()),
				'file.pdf',
			)
			expect(result).toEqual(null)
		})
	})

	describe('GetTotal', () => {
		it('should return total data', async () => {
			const result = await invoicesService.GetTotal()

			const total = mockListInvoice.reduce(
				(acc, int) => {
					acc.electricPowerConsumption +=
						int.electricity_qtd + int.exemptEnergy_qtd
					acc.compensatedEnergy += int.compensatedEnergy_qtd
					acc.totalValueWithoutGD +=
						int.electricity_total + int.exemptEnergy_total + int.contribution
					acc.gdEconomy += int.compensatedEnergy_total
					return acc
				},
				{
					compensatedEnergy: 0,
					electricPowerConsumption: 0,
					gdEconomy: 0,
					totalValueWithoutGD: 0,
				},
			)
			expect(result).toEqual(total)
		})
	})

	describe('FindMany', () => {
		it('should return all invoices', async () => {
			const result = await invoicesService.FindMany()
			expect(result).toEqual(mockListInvoice)
		})
	})
})
