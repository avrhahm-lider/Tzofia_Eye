import { create } from "zustand";
import type { alertType, updateAlertType } from "../types";

interface alertStoreType{
    alerts: alertType[]
    initAlerts: (alerts: alertType[]) => void
    addAlert: (alert: alertType) => void
    updateAlert: (alert: alertType, id: string) => void
    deleteAlert: (id: string) => void
}

export const alertStore = create<alertStoreType>()((set) => ({
    alerts: [],
    initAlerts: (alerts: alertType[]) => set(()=>({alerts: alerts})),
    addAlert: (alert: alertType) => set((s) =>({alerts: [...s.alerts, alert]})),
    updateAlert: (alert: updateAlertType, id: string) => set((s) =>({alerts:updatAlert(s.alerts, alert, id)})),
    deleteAlert: (id: string)  => set((s) =>({alerts: s.alerts.filter(val => val.id !== id)}))
    }
))

function updatAlert(alerts: alertType[], updatedalert: updateAlertType, id: string){
    for (let i=0; i<alerts.length; i++){
        if (alerts[i].id === id)
            alerts[i] = {...alerts[i], ...updatedalert}
        return alerts
    }
    return alerts
}