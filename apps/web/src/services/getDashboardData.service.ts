import { api } from '@/lib/api'

export interface DashboardDataProps {
	compensatedEnergy: number
	electricPowerConsumption: number
	gdEconomy: number
	totalValueWithoutGD: number
}

export async function getDashboardData(): Promise<DashboardDataProps> {
	try {
		const response = await api.get('/dashboard')
		return response.data
	} catch (error) {
		console.error(error)
		return {
			electricPowerConsumption: 0,
			compensatedEnergy: 0,
			totalValueWithoutGD: 0,
			gdEconomy: 0
		}
	}
}
