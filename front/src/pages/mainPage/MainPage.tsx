import React, { useEffect } from 'react'
import "./MainPage.css"
import AlertsMap from '../../components/AlertsMap/AlertsMap'
import AlertGrid from '../../components/AlertGrid/AlertGrid'
import { createAlert, getAllAlerts } from '../../service/alertService'
import { alertStore } from '../../store/alertStore'
interface MainPageType{
    onSubmitHandler: (e :React.SubmitEvent<HTMLFormElement>)=>void
}
export default function MainPage() {
    const initalert = alertStore(s =>s.initAlerts)
    const addalert = alertStore(s => s.addAlert)
    const alerts = alertStore(s => s.alerts)
    useEffect(()=>{
        getAllAlerts().then(data => initalert(data.data)).catch(e =>console.log(e)
    )
    },[addalert])
    function onSubmitHandler(e :React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const alert = {
    displayName: e.target["0"].value,
    description: e.target["1"].value,
    priority: e.target["2"].value,
    arena: e.target["3"].value,
    lon: Number(e.target["4"].value),
    lat: Number(e.target["5"].value)
}

    createAlert(alert).then(data => addalert(data)).catch(e => console.log(e)
    )

    }
    
  return (
    <div className='main-page'>
        
        <AlertsMap alerts={alerts} className='map'/>
        <AlertGrid onSubmitHandler={onSubmitHandler} className='alerts-grid'/>
    </div>
  )
}
