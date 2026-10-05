import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import alertsRoute from './routers/alerts.routes.js'
import { errorHandler } from './utils/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/alerts",alertsRoute)
app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log(`server runing on http://localhost:${process.env.PORT}` );
    
})

