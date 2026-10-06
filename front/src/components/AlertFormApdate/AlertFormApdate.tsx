import React, { type FormHTMLAttributes } from 'react'
import './AlertFormApdate.css'
import type { alertType } from '../../types'
interface AlertFormType{
onSubmitHandler: (e :React.SubmitEvent<HTMLFormElement>, alert : alertType)=>void
onBack : () => void
alert : alertType
}
export default function AlertFormUpdate({onSubmitHandler, onBack, alert}: AlertFormType) {
        
  return (
    <div className='alert-form'>
        <form onSubmit={(e)=>{onSubmitHandler(e, alert)}}>
        <label htmlFor="displayName">displayName <br />
            <input id="displayName" type="text"/>
        </label>
        <label htmlFor="description">description <br />
            <input id="description"type="text" />
        
        </label>
        <div className='selecters'>
        <label htmlFor="priority">priority 
        <select name="priority" id='priority'>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
        </select>
        </label>
        <label htmlFor="arona">arona 
        <select name="arona" id='arona'>
            <option value="South">South</option>
            <option value="Center">Center</option>
            <option value="North">North</option>
        </select>
        </label>
        <label htmlFor="status">status
        <select name="status" id='status'>
            <option value="Active">Active</option>
            <option value="Handled">Handled</option>
        </select>
        </label>
        </div>
        <div className='selecters'>
        <label htmlFor="long">long
            <input id='long' type="number" min={-90} max={90}/>
        </label>

        <label htmlFor="lat">lat
            <input id='lat' type="number" min={-180} max={180}/>
        </label>
        </div>
        <button type='submit'>submit</button>
        </form>
        <button onClick={onBack}>back</button>
    </div>
  )
}
