import React from 'react'
import ProductsPage from '../pages/ProductsPage'
import {Navigate} from 'react-router-dom'

//Funkcija proverava, ako si logovan mozes da vidis productsPage, ako nisi ne mozes
function AuthGuarding({children}) {

    function checkIsLogin(){
        if(localStorage.hasOwnProperty('vite_user')){
            return localStorage.getItem('vite_user')
        }
    }
  
  return checkIsLogin()?children : <Navigate to='/login'/>

}
export default AuthGuarding