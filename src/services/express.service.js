import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from '../routes/index.js'

const app = express()

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes)

export default app