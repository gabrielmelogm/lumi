import { Pdf } from '../contracts/pdf'
import { Owner } from '../entities/Owner.entity'
import { InvoicesRepository } from '../repositories/invoices.repository'
import { OwnersRepository } from '../repositories/owners.repository'

export class InvoicesService {
	constructor(
		private readonly invoicesRepository: InvoicesRepository,
		private readonly ownersRepository: OwnersRepository,
		private readonly pdfService: Pdf,
	) {}

	async CreateInvoice() {
		const invoice = await this.pdfService.Extract()

		if (!invoice?.n_client) {
			throw new Error('N Client not found')
		}

		const existingOwner = await this.ownersRepository.GetOwner(invoice.n_client)

		let owner: Owner | null = null

		if (existingOwner) {
			owner = new Owner({
				id: existingOwner?.id,
				n_client: existingOwner?.n_client,
			})
		}

		if (!owner) {
			const res = await this.ownersRepository.CreateOwner(invoice.n_client)
			owner = new Owner({
				id: res.id,
				n_client: res.n_client,
			})
		}

		return await this.invoicesRepository.CreateInvoice(invoice, owner.id)
	}
}
