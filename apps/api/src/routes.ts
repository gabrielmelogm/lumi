import { Request, Response, Router } from 'express'
import { CreateInvoiceUseCase } from './useCases/createInvoice.usecase'

const route = Router()

route.get('/ping', (_, res: Response) => {
	return res.status(200).send({ status: 'ok' })
})

route.post('/createInvoice', (req: Request, res: Response) =>
	CreateInvoiceUseCase.handle(req, res),
)

export { route }
