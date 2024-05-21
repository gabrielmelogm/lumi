import { Owner } from '../entities/Owner.entity'

export abstract class OwnersRepository {
	abstract GetOwner(n_client: string): Promise<Owner | null>
	abstract CreateOwner(n_client: string): Promise<Owner>
}
