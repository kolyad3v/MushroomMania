import mongoose from 'mongoose'
import config from 'config'
const db: string = config.get('mongoURI')

export const connectDB = async () => {
	try {
		mongoose.connect(db, {
			//@ts-ignore
			useNewUrlParser: true,

			useUnifiedTopology: true,
		})
		console.log('MongoDB connected...')
	} catch (err: any) {
		if (err instanceof Error) console.error(err.message)

		process.exit(1)
	}
}
