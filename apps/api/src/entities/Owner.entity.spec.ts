import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { Owner } from './Owner.entity'

describe('Owner', () => {
	it('should be instance an owner', () => {
		const owner = new Owner({
			id: faker.string.uuid(),
			n_client: faker.string.numeric(10),
		})

		expect(owner).toBeInstanceOf(Owner)
	})

	it('should not be able create an invalid owner', () => {
		const wrongNumberCient = 129102910 as any
		const owner = {
			id: faker.string.uuid(),
			n_client: wrongNumberCient,
		}

		expect(() => new Owner(owner)).toThrow()
	})

	it('should have correct id and n_client attributes', () => {
		const id = faker.string.uuid()
		const n_client = faker.string.numeric(10)

		const owner = new Owner({
			id,
			n_client,
		})

		expect(owner.id).toEqual(id)
		expect(owner.n_client).toEqual(n_client)
	})
})
