import { PrismaClient } from '@prisma/client'
import { Owner } from '../../entities/Owner.entity'
import { OwnersRepository } from '../owners.repository'

export class PrismaOwnersRepository implements OwnersRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async CreateOwner(n_client: string): Promise<Owner> {
		const response = await this.prisma.owner.create({
			data: {
				n_client: n_client,
			},
		})

		const owner = new Owner(response)

		return owner
	}

	async GetOwner(n_client: string): Promise<Owner | null> {
		const response = await this.prisma.owner.findFirst({
			where: {
				n_client,
			},
		})

		if (!response) {
			return null
		}

		const owner = new Owner(response)
		return owner
	}
}
