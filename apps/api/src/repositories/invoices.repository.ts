import { pdfMetadata } from '../@types/pdfMetadata'

export abstract class InvoicesRepository {
	abstract CreateInvoice(
		invoice: Partial<pdfMetadata>,
		ownerId: string,
	): Promise<void>
}
