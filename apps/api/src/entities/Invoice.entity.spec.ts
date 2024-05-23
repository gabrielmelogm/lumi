import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { Invoice } from './Invoice.entity'

describe('Invoice', () => {
	it('should be instance an invoice', () => {
		const invoice = new Invoice({
			id: faker.string.uuid(),
			month: 'DEZ/2023',
			electricity_qtd: faker.number.int(),
			electricity_total: faker.number.float(),
			exemptEnergy_qtd: faker.number.int(),
			exemptEnergy_total: faker.number.float(),
			compensatedEnergy_qtd: faker.number.int(),
			compensatedEnergy_total: faker.number.float(),
			contribution: faker.number.float(),
			total: faker.number.float(),
		})

		expect(invoice).toBeInstanceOf(Invoice)
	})

	it('should not be instance an invalid data format invoice', () => {
		const invoice = {
			id: faker.string.uuid(),
			month: 'DEZ/2023',
			electricity_qtd: faker.string.numeric(),
			electricity_total: faker.string.numeric(),
			exemptEnergy_qtd: faker.string.numeric(),
			exemptEnergy_total: faker.string.numeric(),
			compensatedEnergy_qtd: faker.string.numeric(),
			compensatedEnergy_total: faker.string.numeric(),
			contribution: faker.string.numeric(),
			total: faker.string.numeric(),
		} as any

		expect(() => new Invoice(invoice)).toThrow()
	})
})
