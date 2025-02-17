import { Router } from "express";
import HospitalController from "../../controllers/HospitalController";

const router = Router()

router.get("/", HospitalController.getAllHospital)
router.post("/", HospitalController.createHospital)
router.put("/:id", HospitalController.updateHospital)

export default router