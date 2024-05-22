export interface OwnerProps {
	id: string
	n_client: string
}

export class Owner {
	id: string
	n_client: string

	constructor(props: OwnerProps) {
		this.id = props.id
		this.n_client = props.n_client
	}
}
