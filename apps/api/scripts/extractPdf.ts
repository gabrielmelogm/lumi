import fs from 'node:fs'
import path from 'node:path'
import { prisma } from '../src/database/prisma'
import { PrismaInvoicesRepository } from '../src/repositories/implements/prismaInvoices.repository'
import { PrismaOwnersRepository } from '../src/repositories/implements/prismaOwners.repository'
import { InvoicesService } from '../src/services/invoices.service'
import { PdfParse } from '../src/services/pdf.service'

class ExtractPdf {
	constructor() {
		try {
			this.handle()
			console.log('Successfully generated')
		} catch (error) {
			console.error('Error generating data:', error)
		}
	}

	getPdfFiles(directory: string) {
		return new Promise((resolve, reject) => {
			fs.readdir(directory, (err, files) => {
				if (err) {
					return reject(err)
				}

				const pdfFiles = files
					.filter((file) => path.extname(file).toLowerCase() === '.pdf')
					.map((file) => path.join(directory, file))
				resolve(pdfFiles)
			})
		})
	}

	async handle() {
		const pdfDirectory = path.resolve(__dirname, '../../invoices')
		const files = (await this.getPdfFiles(pdfDirectory)) as string[]

		for (const file of files) {
			const dataBuffer: Buffer = fs.readFileSync(file)
			const filename: string = file.split('/').pop() ?? ''

			const invoiceRepository = new PrismaInvoicesRepository(prisma)
			const ownerRepository = new PrismaOwnersRepository(prisma)
			const pdfService = new PdfParse()
			const service = new InvoicesService(
				invoiceRepository,
				ownerRepository,
				pdfService,
			)
			await service.CreateInvoice(dataBuffer, filename)
		}
	}
}

new ExtractPdf()
