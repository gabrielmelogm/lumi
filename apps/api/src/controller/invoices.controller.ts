import fs from 'node:fs'
import path from 'node:path'

import { Request, Response } from 'express'
import { InvoicesService } from '../services/invoices.service'
import { filepath } from '../utils/filepath'

export class InvoicesController {
	constructor(private readonly invoicesService: InvoicesService) {}

	async CreateInvoice(req: Request, res: Response) {
		const dataBuffer: Buffer = fs.readFileSync(req.body.file)

		await this.invoicesService.CreateInvoice(dataBuffer, req.body.filename)
		return res.status(200).send({ status: 'success' })
	}

	async GetTotal(_: Request, res: Response) {
		const data = await this.invoicesService.GetTotal()
		return res.status(200).send(data)
	}

	async FindMany(req: Request, res: Response) {
		const param = req.query?.n_client as string

		const data = await this.invoicesService.FindMany(param)
		return res.status(200).send(data)
	}

	async Download(req: Request, res: Response) {
		const filename = req.params.filename
		const filePath = path.join(filepath, filename)

		fs.access(filePath, fs.constants.F_OK, (err) => {
			if (err) {
				console.error(err)
				return res.status(400).send({ error: 'File not found' })
			}

			res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)

			res.setHeader('Content-Type', 'application/pdf')

			const fileStream: fs.ReadStream = fs.createReadStream(filePath)
			fileStream.pipe(res)
		})
	}
}
