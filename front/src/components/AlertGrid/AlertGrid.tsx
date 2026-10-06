import React from 'react'
import AlertForm from '../AlertForm/AlertForm'
import './AlertGrid.css'
interface AlertGridTtype{
    className?: string
    element: React.JSX.Element

}
export default function AlertGrid({className, element} : AlertGridTtype) {
  return (
    <div className={ `alert-grid ${className}`}>
        {element}
    </div>
  )
}
