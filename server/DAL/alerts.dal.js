import { ObjectId } from "mongodb";
import { db } from "../db/mongodb.js";

const alerts = db.collection("alerts")

function getalerts() {
    return alerts.find().toArray()
}

function getalertById(id) {
    return alerts.findOne({_id: new ObjectId(id)})
    
}

async function createAlert(alert) {
    const res = await alerts.insertOne(alert)
    return alert

}

function updateAlert(id, updatAlert) {
    return alerts.updateOne({_id: new ObjectId(id)}, {$set: updatAlert})

}

function deleteAlert(id) {
    return alerts.deleteOne({_id: new ObjectId(id)})
}

export default {getalerts, getalertById, createAlert, updateAlert, deleteAlert}