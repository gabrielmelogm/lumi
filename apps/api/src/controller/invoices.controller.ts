import fs from 'node:fs'

import { Request, Response } from 'express'
import { InvoicesService } from '../services/invoices.service'

export class InvoicesController {
	constructor(private readonly invoicesService: InvoicesService) {}

	async CreateInvoice(req: Request, res: Response) {
		const dataBuffer: Buffer = fs.readFileSync(req.body.file)

		await this.invoicesService.CreateInvoice(dataBuffer)
		return res.status(200).send({ status: 'success' })
	}

	async GetTotal(_: Request, res: Response) {
		const data = await this.invoicesService.GetTotal()
		return res.status(200).send(data)
	}
}
