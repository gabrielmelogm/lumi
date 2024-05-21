import { pdfMetadata } from '../@types/pdfMetadata'

export abstract class Pdf {
	abstract Extract(dataFile: Buffer): Promise<Partial<pdfMetadata> | undefined>
}
