import React, { useState } from 'react'
import { useHistory } from 'react-router';

function Login() {
    const history=useHistory()
    const [login, setlogin] = useState({
        email:'',password:''
    })
    const change=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setlogin({...login,[name]:value})
        console.log(login);
    }
    const sub=async (e)=>{
        e.preventDefault();
        const {email,password}=login
        const res=await fetch('/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        })
        const dat=await res.json();
        if(!dat){
            console.log('fail');
        }
        else{
            console.log('success');
            history.push('/')
        }
    }
    return (
        <div>
            <form method='POST'>
                <input name='email' onChange={(e)=>change(e)} type='text' placeholder='email'/>
                <input name='password' onChange={(e)=>change(e)} type='password' placeholder='password'/>
                <button onClick={sub}>login</button>
            </form>
        </div>
    )
}

export default Login
