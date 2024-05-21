import { Request, Response, Router } from 'express'
import { InvoiceUseCase } from './useCases/invoice.usecase'

const route = Router()

route.get('/ping', (_, res: Response) => {
	return res.status(200).send({ status: 'ok' })
})

route.post('/createInvoice', (req: Request, res: Response) =>
	InvoiceUseCase.CreateInvoice(req, res),
)

route.get('/dashboard', (req: Request, res: Response) =>
	InvoiceUseCase.GetTotal(req, res),
)

export { route }
