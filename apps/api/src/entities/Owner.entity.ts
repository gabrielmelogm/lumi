import z from 'zod'

export interface OwnerProps {
	id: string
	n_client: string
}

export class Owner {
	id: string
	n_client: string

	constructor(props: OwnerProps) {
		const ownerSchema = z.object({
			id: z.string(),
			n_client: z.string(),
		})

		const owner = ownerSchema.parse(props)

		this.id = owner.id
		this.n_client = owner.n_client
	}
}
