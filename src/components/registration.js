import React, { useState } from 'react'
import { useHistory } from 'react-router'

function Registration() {
    const history=useHistory();
    const [maindata, setdata] = useState({
        name:'',email:'',phone:'',work:'',password:'',cpassword:''
    })
    const [main, setmain] = useState([])
    const handelCh=(e)=>{
        e.preventDefault();
        let name=e.target.name;
        let value=e.target.value;
        setdata({...maindata,[name]:value})
        console.log(maindata)
        
    }
    const mai=async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}=maindata;
        const res=await fetch('/registration',{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({name,email,phone,work,password,cpassword})
            

        })
        const data=await res.json();
            if(!data){
                console.log('invalid');
            }
            else{
                console.log('succesful');
                history.push('/login')
            }
    }
    return (
        <div>
            <form method="POST">
                <input onChange={(e)=>handelCh(e)} type='text' placeholder='name' name='name'/>
                <input onChange={(e)=>handelCh(e)} type='text' placeholder='email' name='email' />
                <input onChange={(e)=>handelCh(e)} type='text' placeholder='phone' name='phone' />
                <input onChange={(e)=>handelCh(e)} type='text' placeholder='work' name='work' />
                <input onChange={(e)=>handelCh(e)} type='password' placeholder='password' name='password' />
                <input onChange={(e)=>handelCh(e)} type='password' placeholder='cpassword' name='cpassword' />
                <button type='submit' onClick={mai}>submit</button>
                </form>
            
        </div>
    )
}

export default Registration
