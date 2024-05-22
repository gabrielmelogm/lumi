import { pdfMetadata } from '../@types/pdfMetadata'
import { Invoice } from '../entities/Invoice.entity'

export abstract class InvoicesRepository {
	abstract CreateInvoice(
		invoice: Partial<pdfMetadata>,
		ownerId: string,
		filename: string,
	): Promise<void>

	abstract FindAll(): Promise<Invoice[]>
	abstract FindByClient(n_client: string): Promise<Invoice[]>
}
