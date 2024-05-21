import { InvoicesController } from '../controller/invoices.controller'
import { prisma } from '../database/prisma'
import { PrismaInvoicesRepository } from '../repositories/implements/prismaInvoices.repository'
import { PrismaOwnersRepository } from '../repositories/implements/prismaOwners.repository'
import { InvoicesService } from '../services/invoices.service'
import { PdfParse } from '../services/pdf'

const invoiceRepository = new PrismaInvoicesRepository(prisma)
const ownerRepository = new PrismaOwnersRepository(prisma)
const pdfService = new PdfParse()
const service = new InvoicesService(
	invoiceRepository,
	ownerRepository,
	pdfService,
)
const controller = new InvoicesController(service)

export const CreateInvoiceUseCase = controller
