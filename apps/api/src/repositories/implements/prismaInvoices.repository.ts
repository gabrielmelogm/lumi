import { PrismaClient } from '@prisma/client'
import { pdfMetadata } from '../../@types/pdfMetadata'
import { InvoicesRepository } from '../invoices.repository'

export class PrismaInvoicesRepository implements InvoicesRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async CreateInvoice(data: pdfMetadata, ownerId: string): Promise<void> {
		await this.prisma.invoice.create({
			data: {
				month: new Date(data.month),
				total: data.total,
				electricity_qtd: data.electricity.qtd,
				electricity_total: data.electricity.total,
				exemptEnergy_qtd: data.exemptEnergy.qtd,
				exemptEnergy_total: data.exemptEnergy.total,
				compensatedEnergy_qtd: data.compensatedEnergy.qtd,
				compensatedEnergy_total: data.compensatedEnergy.total,
				contribution: data.contribution,
				ownerId,
			},
		})
	}
}
