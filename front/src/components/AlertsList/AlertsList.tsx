import React from 'react'
import alertCard from '../AlertCard/AlertCard'
import type { alertType } from '../../types'
import AlertCard from '../AlertCard/AlertCard'

interface AlertListType{
    alerts : alertType[]
    onCreate : ()=> void
    onEdit: () => void
}
export default function AlertsList({alerts, onCreate, onEdit}: AlertListType) {
  return (
    <div>
        {alerts.map(val => (<section key={val.id}>{<AlertCard alert={val} onClickEdit={onEdit}
          />}
          </section>
        ))}
        <button onClick={onCreate}>+</button>
    </div>
  )
}
