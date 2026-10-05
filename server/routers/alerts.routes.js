import { Router } from "express";
import alertsCtrls from "../ctrls/alerts.ctrls.js";
import { validate } from "../utils/schemaValidate.js";
import { alertSchema } from "../schemases/alertSchema.js";


const router = Router()


router.get("", alertsCtrls.getAlerts)
router.get("/:id", alertsCtrls.getAlertById)
router.post("",validate(alertSchema), alertsCtrls.creatAlerts)
router.put("/:id",validate(alertSchema), alertsCtrls.updatAlert)
router.delete("/:id", alertsCtrls.deleteAlert)

export default router