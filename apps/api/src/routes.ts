import { Response, Router } from 'express'

const route = Router()

route.get('/ping', (_, res: Response) => {
	return res.status(200).send({ status: 'ok' })
})

export { route }
