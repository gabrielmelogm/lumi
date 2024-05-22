import { api } from '@/lib/api'

export interface DashboardDataProps {
	compensatedEnergy: number
	electricPowerConsumption: number
	gdEconomy: number
	totalValueWithoutGD: number
}

export async function getDashboardData(): Promise<DashboardDataProps> {
	const response = await api.get('/dashboard')
	return response.data
}
