import fs from 'node:fs'
import path from 'node:path'
import jszip from 'jszip'

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
		const filenames: string[] = req.body.filenames

		if (!filenames || !Array.isArray(filenames)) {
			return res.status(400).send({ error: 'Missing or invalid file names' })
		}

		const paths = []

		for (const filename of filenames) {
			const fullFilePath = path.join(filepath, filename)
			paths.push(fullFilePath)
		}

		for (const fullFilePath of paths) {
			if (!fs.existsSync(fullFilePath)) {
				return res
					.status(404)
					.send({ error: `File not found: ${fullFilePath.split('/').pop()}` })
			}
		}

		res.setHeader('Content-Type', 'application/pdf')
		res.setHeader('Content-Disposition', `attachment; filename="invoices.zip"`)

		const zip = new jszip()

		for (const fullFilePath of paths) {
			const pdfData = fs.readFileSync(fullFilePath)
			zip.file(path.basename(fullFilePath), pdfData)
		}

		zip
			.generateAsync({ type: 'nodebuffer' })
			.then((zipData) => {
				res.status(200).send(zipData)
			})
			.catch((err) => {
				console.error('Error generating zip file:', err)
				res.status(500).send('Error generating zip file')
			})
	}
}
