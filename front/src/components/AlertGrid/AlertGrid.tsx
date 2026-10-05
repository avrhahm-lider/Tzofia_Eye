import React from 'react'
import AlertForm from '../AlertForm/AlertForm'
interface AlertGridTtype{
    className?: string
    onSubmitHandler: (e :React.SubmitEvent<HTMLFormElement>)=>void
}
export default function AlertGrid({className, onSubmitHandler} : AlertGridTtype) {
  return (
    <div className={className}>
        <AlertForm onSubmitHandler={onSubmitHandler}/>
        <button onClick={()=>{}}>+</button>
    </div>
  )
}
