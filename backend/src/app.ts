import { handleErrorMiddleware } from './middlewares/handleError.middleware'
import 'express-async-errors'
import express from 'express'
import 'reflect-metadata'
import 'dotenv/config'


const app = express()
app.use(express.json())

app.use(handleErrorMiddleware)

export { app }
