import React, { useEffect } from 'react'
import type { alertType } from '../../types'
import { alertStore } from '../../store/alertStore'
import './AlertCard.css'
import { deleteAlert } from '../../service/alertService'

interface updateTyp{
    alert: alertType
    onClickEdit: ()=> void
}
export default function AlertCard({alert, onClickEdit}: updateTyp) {
    const deleteAler = alertStore(s => s.deleteAlert)
    console.log("14",alert);
    function onClickRemove(id: string){
        console.log(id);
        
        deleteAlert(id).then(()=> deleteAler(id)).catch(e => console.log(e))
    }
  return (
    <div className='alert-card'>
        <h3>{alert.displayName}</h3>
        <h5>{alert.description}</h5>
        <p>{alert.arena}</p>
        <p>{alert.priority}</p>
        <p>{alert.lat}/{alert.lon}</p>
        <button onClick={()=> onClickRemove(alert.id)}>remove</button>
        <button onClick={onClickEdit}>edit</button>

    </div>
  )
}
