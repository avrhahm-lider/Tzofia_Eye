import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import alertsRoute from './routers/alerts.routes.js'
import authRouter from './routers/auth.router.js'
import { errorHandler } from './utils/errorHandler.js'

const app = express()
const router = express.Router()

router.use("/alerts",alertsRoute)
router.use("/auth",authRouter)

app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log(`server runing on http://localhost:${process.env.PORT}` );
    
})

