import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import AlertsMap from '../../components/AlertsMap/AlertsMap'
import AlertGrid from '../../components/AlertGrid/AlertGrid'
import { createAlert, deleteAlert, getAllAlerts } from '../../service/alertService'
import { alertStore } from '../../store/alertStore'
import useAlret from '../../hooks/useAlret'
import AlertsList from '../../components/AlertsList/AlertsList'
import AlertForm from '../../components/AlertForm/AlertForm'
import AlertFormUpdate from '../../components/AlertFormApdate/AlertFormApdate'
import type { alertType } from '../../types'
interface MainPageType{
    onSubmitHandler: (e :React.SubmitEvent<HTMLFormElement>)=>void
}
export default function MainPage() {
    const [toEdit, setToEdit] = useState<alertType | null>(null)
    const {onpage, setPage} = useAlret()
    const initalert = alertStore(s =>s.initAlerts)
    const addalert = alertStore(s => s.addAlert)

    const alerts = alertStore(s => s.alerts)
    useEffect(()=>{
        getAllAlerts().then(data => initalert(data.data)).catch(e =>console.log(e)
    )
    },[])
    function onSubmitHandler(e :React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const alert = {
    displayName: e.target["0"].value,
    description: e.target["1"].value,
    priority: e.target["2"].value,
    arena: e.target["3"].value,
    status: e.target["4"].value,
    lon: Number(e.target["5"].value),
    lat: Number(e.target["6"].value)
}

    createAlert(alert).then(data => addalert(data.data)).catch(e => console.log(e)
    )

    }
    function onClickCreate(){
        setPage("Create")
    }
    function onClickBack(){
        setPage("List")
    }
        function onClickEdit(alert : alertType){
        setPage("Edit")
        setToEdit(alert)
    }
    function onSubmitHandlerUpdate(e :React.SubmitEvent<HTMLFormElement>, currentAlert: alertType) {
        e.preventDefault()
        const alert = {
    displayName: e.target["0"].value,
    description: e.target["1"].value,
    priority: e.target["2"].value,
    arena: e.target["3"].value,
    status: e.target["4"].value,
    lon: Number(e.target["5"].value),
    lat: Number(e.target["6"].value)
}

    createAlert(alert).then(data => addalert(data.data)).catch(e => console.log(e)
    )

    }

  return (
    <div className='main-page'>
        <AlertsMap alerts={alerts} className='map'/>
        {onpage === "List" && <AlertGrid element={<AlertsList alerts={alerts} onCreate={onClickCreate} onEdit={onClickEdit}/>}  className='alret-list'/>}
        {onpage === "Create" && <AlertGrid element={<AlertForm onSubmitHandler={onSubmitHandler} onBack={onClickBack}/>} className='alerts-grid'/>}
        {onpage === "Edit" && <AlertGrid element={<AlertFormUpdate onSubmitHandler={onSubmitHandlerUpdate} onBack={onClickBack} alert={toEdit}/>} className='alerts-grid'/>}
    </div>
  )
}
