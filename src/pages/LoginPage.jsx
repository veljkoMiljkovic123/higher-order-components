import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
useRef



function LoginPage() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const inputRef = useRef();

  const navigate = useNavigate();

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  function handleInput(event){
    /* console.log(event.target.value,event.target.name); */
    if(event.target.name==='email'){
      setEmail(event.target.value)
    }else if(event.target.name='password'){
      setPassword(event.target.value)
    }
    
  }

  function handleSubmit(event){
    event.preventDefault()
    //1.cuvaj podatke
    localStorage.setItem('vite_user',JSON.stringify({email,password}))
    //2.redirect on home
    setEmail('')
    setPassword('')
    setTimeout(()=>{
      toast.success('Dobri su podaci!Logovan si!')
      navigate('/')
    },5000)
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-2xl my-[50px]'>Login</h2>

      <form className='w-[50%] mx-auto border-2 border-blue-500 p-5 flex flex-col items-center gap-5' >
      <input 
      type="email" 
      className='border w-full px-[12px] py-[20px]'
       placeholder='Email'
       name='email'
       value={email}
       onChange={handleInput}
       ref={inputRef}
        />
      <input 
      className='border w-full px-[12px] py-[20px]' 
      type="password" 
      placeholder='Password'
      name='password'
      value={password}
      onChange={handleInput}
      />
      <button className='px-[40px] text-white py-[12px] bg-blue-500' type='submit' onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage