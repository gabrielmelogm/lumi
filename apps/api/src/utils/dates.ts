export function formatDate(date: string): Date {
	const monthName = date.split('/')[0]
	const year = date.split('/')[1]

	const dates = {
		JAN: new Date(`${year}/1/1`),
		FEV: new Date(`${year}/2/1`),
		MAR: new Date(`${year}/3/1`),
		ABR: new Date(`${year}/4/1`),
		MAI: new Date(`${year}/5/1`),
		JUN: new Date(`${year}/6/1`),
		JUL: new Date(`${year}/7/1`),
		AGO: new Date(`${year}/8/1`),
		SET: new Date(`${year}/9/1`),
		OUT: new Date(`${year}/10/1`),
		NOV: new Date(`${year}/11/1`),
		DEZ: new Date(`${year}/12/1`),
	} as any

	const dateFormatted = dates[monthName]

	return dateFormatted
}
