import { getDashboardData } from '@/services/getDashboardData.service'
import { useQuery } from '@tanstack/react-query'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { Card, CardProps } from '../components/Card'

export function Dashboard() {
	const queryDashboard = useQuery({
		queryKey: ['dashboard'],
		queryFn: getDashboardData,
	})

	const cards: CardProps[] = [
		{
			icon: <AiOutlineThunderbolt />,
			title: 'Energia (kWh)',
			value:
				(queryDashboard.data?.electricPowerConsumption ?? 0) +
				(queryDashboard.data?.compensatedEnergy ?? 0),
			symbol: 'kWh',
		},
		{
			icon: <MdAttachMoney />,
			title: 'Balanço (R$)',
			value:
				(queryDashboard.data?.totalValueWithoutGD ?? 0) +
				(queryDashboard.data?.gdEconomy ?? 0),
			symbol: 'R$',
		},
	]

	return (
		<div className="grid grid-cols-2 gap-8">
			{cards.map((card) => (
				<Card
					key={card.title}
					icon={card.icon}
					title={card.title}
					value={card.value}
					symbol={card.symbol}
				/>
			))}
		</div>
	)
}
