import express, { Express } from 'express'
import dotenv from 'dotenv'
import { router } from './router'

dotenv.config()

const app: Express = express()
const port = process.env.SERVER_PORT

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
})
