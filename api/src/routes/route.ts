import { Router, Request, Response } from "express";

import userRouter from './routePath/userRoutes';
import vaccineRouter from './routePath/vaccineRoutes';
import hospitalRouter from './routePath/hospitalRoutes'

const router = Router()

router.use("/user", userRouter)
router.use('/vaccine', vaccineRouter)
router.use('/hospital', hospitalRouter)

router.get('/ping', (req : Request, res : Response)=>{
    return res.json({message: "Ping Succeed!"})
})

export default router