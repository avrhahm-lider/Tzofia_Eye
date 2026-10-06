import React, { useState } from 'react'
import { login } from '../../service/authService'

export default function LoginPage() {
    const [loginState, setLoginState] = useState({loading: false, error: null})
    function onSubmitHandler(e: React.SubmitEvent<HTMLFormElement>){
        console.log({userName: e.target["0"].value, password: e.target["0"].value});
        
        setLoginState({loading: true, error: null})
        login({userName: e.target["0"].value, password: e.target["1"].value}).then(data => Promise.resolve(localStorage.setItem("token", data.data)))
        .then(()=> setLoginState({loading: false, error: null}))
        .catch((e)=>setLoginState({loading: true, error: e.message? e.message : "somthing hepend"}) )
    }
  return (
    <div>
        {loginState.loading && <h1>loading...</h1>}
        {loginState.error && <h1>{loginState.error}</h1>}
         {!loginState.error && !loginState.loading && <form onSubmit={(e)=>{onSubmitHandler(e)}}>
        <label htmlFor="displayName">userName <br />
            <input id="displayName" type="text"/>
        </label>
        <label htmlFor="description">password <br />
            <input id="description" type="password" />
        </label>
        <button type='submit'>submit</button>
            </form>}
    </div>
  )
}
