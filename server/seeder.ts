import config from 'config'
import fs from 'fs'
import mongoose from 'mongoose'
import Item from './models/Item'

const db: string = config.get('mongoURI')

// load models

// connect to DB
mongoose.connect(db, {
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
})

// read JSON files
const shrooms = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/mushrooms.json`, 'utf-8')
)

// import into db
const importData = async () => {
	try {
		//@ts-ignore
		await Item.create(shrooms)
		console.log('Data imported...')
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

// Delete Data
const deleteData = async () => {
	try {
		//@ts-ignore

		await Item.deleteMany()
		console.log('Data destroyed...')
		process.exit()
	} catch (err) {
		console.error(err)
	}
}

if (process.argv[2] === '-i') {
	importData()
} else if (process.argv[2] === '-d') {
	deleteData()
}
