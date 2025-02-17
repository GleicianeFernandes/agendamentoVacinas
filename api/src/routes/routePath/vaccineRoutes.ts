import { Router } from "express";
import VaccineController from "../../controllers/VaccineController";

const router = Router()

router.get("/:id", VaccineController.getVaccine)
router.get("/", VaccineController.getAllVaccine)
router.post("/", VaccineController.createVaccine)

export default router