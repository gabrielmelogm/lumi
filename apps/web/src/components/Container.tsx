import { ReactNode } from 'react'

export function Container(props: { children: ReactNode; className?: string }) {
	return (
		<div className={`w-full max-w-[1280px] ${props.className ?? ''}`}>
			{props.children}
		</div>
	)
}
