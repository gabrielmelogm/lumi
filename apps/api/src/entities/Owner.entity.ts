export interface OwnerProps {
	id: string
	n_client: string
}

export class Owner {
	private props: OwnerProps
	id: string
	n_client: string

	constructor(props: OwnerProps) {
		this.props = props
		this.id = props.id
		this.n_client = props.n_client
	}
}
