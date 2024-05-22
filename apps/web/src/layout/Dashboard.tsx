import { AiOutlineThunderbolt } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { Card, CardProps } from '../components/Card'

export function Dashboard() {
	const cards: CardProps[] = [
		{
			icon: <AiOutlineThunderbolt />,
			title: 'Energia (kWh)',
			value: 150.0,
			symbol: 'kWh',
		},
		{
			icon: <MdAttachMoney />,
			title: 'Energia (R$)',
			value: 150.0,
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
