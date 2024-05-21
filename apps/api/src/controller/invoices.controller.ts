import { Request, Response } from 'express'
import { InvoicesService } from '../services/invoices.service'

export class InvoicesController {
	constructor(private readonly invoicesService: InvoicesService) {}

	async handle(_: Request, res: Response) {
		await this.invoicesService.CreateInvoice()
		return res.status(200).send({ status: 'success' })
	}
}
