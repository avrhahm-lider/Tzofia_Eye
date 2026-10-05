import { ObjectId } from "mongodb"
import alertsDal from "../DAL/alerts.dal.js"
import { createError } from "../utils/createError.js"


async function getAlertById(id) {
    if (!id || !ObjectId.isValid(id)) throw createError(400, "invalid id")
    return alertsDal.getalertById(id)
}
async function creatAlerts(alert) {
    return alertsDal.createAlert(alert)
}
async function updatAlert(id, updatedAlert) {
    console.log(id);
    
    if (!id || !ObjectId.isValid(id)) throw createError(400, "invalid id")
    return alertsDal.updateAlert(id, updatedAlert)
}
async function deleteAlert(id) {
    if (!id || !ObjectId.isValid(id)) throw createError(400, "invalid id")
    return alertsDal.deleteAlert(id)
}

export default {getAlertById, creatAlerts, updatAlert, deleteAlert}