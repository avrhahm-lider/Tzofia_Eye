import type { alertType, updateAlertType } from "../types";
import { api } from "./api";
const BASE_URL = "http://127.0.0.1:3001/api/alerts"

export async function createAlert(alert: alertType){
    return  api(`${BASE_URL}`,{
        method: 'POST',
        headers: {"content-type": 'application/json'},
        body: JSON.stringify(alert)

    })

}

export async function updateAlert(id: string, alert: updateAlertType){
    return  api(`${BASE_URL}/:${id}`,{
        method: 'PUT',
        body: JSON.stringify(alert)

    })

}

export async function deleteAlert(id: string){
    return  api(`${BASE_URL}/:${id}`,{
        method: 'DELETE',
    })

}

export async function getAlertById(id: string){
    return  api(`${BASE_URL}/:${id}`, {method: 'GET'})

}

export async function getAllAlerts(){
    return api(`${BASE_URL}`,{
        method: 'GET'
    })

}
