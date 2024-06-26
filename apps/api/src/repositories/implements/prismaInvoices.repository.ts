import { PrismaClient } from '@prisma/client'
import { pdfMetadata } from '../../@types/pdfMetadata'
import { Invoice, InvoiceProps } from '../../entities/Invoice.entity'
import { formatDate } from '../../utils/dates'
import { InvoicesRepository } from '../invoices.repository'

export class PrismaInvoicesRepository implements InvoicesRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async CreateInvoice(
		data: pdfMetadata,
		ownerId: string,
		filename: string,
	): Promise<void> {
		await this.prisma.invoice.create({
			data: {
				month: formatDate(data.month),
				total: data.total,
				electricity_qtd: data.electricity.qtd,
				electricity_total: data.electricity.total,
				exemptEnergy_qtd: data.exemptEnergy.qtd,
				exemptEnergy_total: data.exemptEnergy.total,
				compensatedEnergy_qtd: data.compensatedEnergy.qtd,
				compensatedEnergy_total: data.compensatedEnergy.total,
				contribution: data.contribution,
				ownerId,
				filename,
			},
		})
	}

	async FindAll(): Promise<InvoiceProps[]> {
		const data = await this.prisma.invoice.findMany({
			include: {
				Owner: true,
			},
		})
		const invoices: Invoice[] = []

		for (const row of data) {
			const invoice = { ...row, month: String(row.month) }
			invoices.push(invoice)
		}

		return invoices
	}

	async FindByClient(n_client: string): Promise<Invoice[]> {
		const data = await this.prisma.invoice.findMany({
			include: {
				Owner: true,
			},
			where: {
				Owner: {
					n_client,
				},
			},
		})
		const invoices: Invoice[] = []

		for (const row of data) {
			const invoice = { ...row, month: String(row.month) }
			invoices.push(invoice)
		}

		return invoices
	}
}
