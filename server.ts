import express from 'express'
import { connectDB } from './config/db'
import path from 'path'
const app = express()

// Connect Database
connectDB()

//init middleware
app.use(express.json({}))

//Define routes
app.use('/api/players', require('./routes/players'))
app.use('/api/auth', require('./routes/auth'))

// serve static assets in production
app.use(express.static('client/dist'))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on ${PORT}`))
