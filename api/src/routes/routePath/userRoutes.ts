import { Router } from "express";
import UserController from "../../controllers/UserController";

const router = Router()

router.post("/", UserController.getUser)
router.put("/", UserController.updateUser)

export default router