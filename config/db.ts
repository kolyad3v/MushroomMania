import mongoose from 'mongoose'
const config = require('config')
const db = config.get('mongoURI')

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

module.exports = connectDB
