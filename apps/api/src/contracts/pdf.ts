import { pdfMetadata } from '../@types/pdfMetadata'

export abstract class Pdf {
	abstract Extract(): Promise<Partial<pdfMetadata> | undefined>
}
