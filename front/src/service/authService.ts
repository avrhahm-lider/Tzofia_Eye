import type { alertType, loginType, registerType, updateAlertType } from "../types";
import { api } from "./api";
const BASE_URL = "http://127.0.0.1:3001/api/auth"

export async function register(details: registerType){
    return  api(`${BASE_URL}/register`,{
        method: 'POST',
        headers: {"content-type": 'application/json'},
        body: JSON.stringify(details)

    })

}

export async function login(details: loginType){
    return  api(`${BASE_URL}/login`,{
        method: 'POST',
        body: JSON.stringify(details)

    })

}

export async function me(){
    return  api(`${BASE_URL}/me`,{
        method: 'GET',
    })

}

export async function getAlertById(id: string){
    return  api(`${BASE_URL}/${id}`, {method: 'GET'})

}