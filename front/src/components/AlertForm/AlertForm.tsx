import React, { type FormHTMLAttributes } from 'react'
import './AlertForm.css'
interface AlertFormType{
onSubmitHandler: (e :React.SubmitEvent<HTMLFormElement>)=>void
onBack : () => void
}
export default function AlertForm({onSubmitHandler, onBack}: AlertFormType) {

    // function mom(e :  React.SubmitEvent<HTMLFormElement>){
    //     e.preventDefault()
    //     console.log(e.target["0"].value, e.target["1"].value, e.target["2"].value, e.target["3"].value,e.target["4"].value, e.target["5"].value);
        
        
    // }
  return (
    <div className='alert-form'>
        <form onSubmit={(e)=>{onSubmitHandler(e)}}>
        <label htmlFor="displayName">displayName <br />
            <input id="displayName" type="text" minLength={3}/>
        </label>
        <label htmlFor="description">description <br />
            <input id="description"type="text" minLength={5}/>
        
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
        <label htmlFor="priority">arona 
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

    // displayName: z.string().min(3),
    // description: z.string().min(5),
    // priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    // arena: z.enum(['Active', 'Handled']),
    // lon: z.number(),
    // lat: z.number()