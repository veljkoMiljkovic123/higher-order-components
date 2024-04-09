import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarComponent() {


    function handleLogout(){
        localStorage.removeItem('vite_user')
    }

  return (
    <div className='container mx-auto flex justify-between items-center h-[100px] bg-blue-500'>
        <h1 className='text-4xl font-bold uppercase'>Logo</h1>

        <ul className='flex items-center gap-6'>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/products'}>Products</NavLink>
            </li>
            {localStorage.hasOwnProperty('vite_user')?(<li>
                <button onClick={handleLogout}>Logout</button>
            </li>):(
                <li>
                <NavLink to={'/login'}>Login</NavLink>
            </li>
            )}
            
        </ul>
    </div>
  )
}

export default NavbarComponent