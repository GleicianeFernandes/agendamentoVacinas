import { Router } from "express";
import ScheduleController from "../../controllers/ScheduleController";

const router = Router()

router.get("/user/:idUser", ScheduleController.getSchedulegByUserId)
router.post("/", ScheduleController.createSchedule)
router.delete("/:schedulingId", ScheduleController.deleteSchedule)

export default router