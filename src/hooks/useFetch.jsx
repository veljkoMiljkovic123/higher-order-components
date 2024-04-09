import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productsService'

function useFetch() {

    const[data,setData]=useState([])
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        ProductsService.getAllProducts()
        .then(res=>{
            setData(res.data.products)
            setIsLoading(true)
        })
        .catch(err=>console.log(err))
    },[])
  return {data:data,isLoading:isLoading}
}

export default useFetch