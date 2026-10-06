import { ObjectId } from "mongodb"
import alertsDal from "../DAL/alerts.dal.js"
import { createError } from "../utils/createError.js"
import { object } from "zod"


async function getAlerts(req, res) {
    const result = await alertsDal.getalerts()
    return result.map(val => ({...val, id: val._id}))
}

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
    console.log("aaaaa", id.length);
    console.log(id);
    
    console.log(!id);
    console.log(!ObjectId.isValid(id));
    
    if (!id || !ObjectId.isValid(id)) throw createError(400, "invalid id")
    return alertsDal.deleteAlert(id)
}

export default {getAlerts, getAlertById, creatAlerts, updatAlert, deleteAlert}