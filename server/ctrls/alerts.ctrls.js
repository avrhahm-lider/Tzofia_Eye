
import alertsDal from "../DAL/alerts.dal.js"
import alertsService from "../services/alerts.service.js"

async function getAlerts(req, res) {
    const result = await alertsDal.getalerts()
    res.json({seccess: true, data: result})
}
async function getAlertById(req, res) {
        const {id} = req.params
    const result = await alertsService.getAlertById(id)
    res.json({seccess: true, data: result})
}
async function creatAlerts(req, res) {
    const result = await alertsService.creatAlerts(req.body)
    res.status(201).json({seccess: true, data: result})
}
async function updatAlert(req, res) {
    const {id} = req.params
    const result = await alertsService.updatAlert(id, req.body)
    res.status(200).json({seccess: true, data: result})
}
async function deleteAlert(req, res) {
        const {id} = req.params
    const result = await alertsService.deleteAlert(id)
    res.status(200).json({seccess: true, data: `alert ${id} deleted`})
}

export default {getAlerts, getAlertById, creatAlerts, updatAlert, deleteAlert}