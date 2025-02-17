import { Router, Request, Response } from "express";

import userRouter from './routePath/userRoutes';
import vaccineRouter from './routePath/vaccineRoutes';

const router = Router()

router.use("/user", userRouter)
router.use('/vaccine', vaccineRouter)

router.get('/ping', (req : Request, res : Response)=>{
    return res.json({message: "Ping Succeed!"})
})

export default router