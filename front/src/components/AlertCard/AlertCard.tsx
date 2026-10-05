import React from 'react'
import type { alertType } from '../../types'
import { alertStore } from '../../store/alertStore'


export default function alertCard(alert: alertType) {
    const deleteAlert = alertStore(s => s.deleteAlert)
  return (
    <div id={alert.id}>
        <h3>{alert.displayName}</h3>
        <h5>{alert.description}</h5>
        <p>{alert.arena}</p>
        <p>{alert.priority}</p>
        <p>{alert.lat}/{alert.lon}</p>
        <button onClick={()=>{}}>remove</button>
        <button onClick={()=>{}}>edit</button>

    </div>
  )
}
