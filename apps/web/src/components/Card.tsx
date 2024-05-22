import { ReactNode } from 'react'

export interface CardProps {
	icon: ReactNode
	title: string
	value: number
	symbol: 'kWh' | 'R$'
}

export function Card(props: CardProps) {
	return (
		<div className="w-full h-[120px] shadow-xl rounded-md grid grid-cols-card items-center px-8">
			<div className="w-12 h-12 rounded-full flex items-center justify-center text-3xl text-green shadow-lg">
				{props.icon}
			</div>
			<div className="flex flex-col gap-2 items-end">
				<h2 className="text-dark-gray font-bold">{props.title}</h2>
				<h3 className="text-green text-3xl font-bold">
					{props.value.toFixed(3)}{' '}
					<span className="text-sm font-normal text-dark-gray">
						{props.symbol}
					</span>
				</h3>
			</div>
		</div>
	)
}
