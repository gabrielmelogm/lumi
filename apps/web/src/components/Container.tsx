import { ReactNode } from 'react'

export function Container(props: { children: ReactNode; className?: string }) {
	return (
		<div className={`w-full max-w-[800px] ${props.className ?? ''}`}>
			{props.children}
		</div>
	)
}
