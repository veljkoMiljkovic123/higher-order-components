import React from 'react'
import useFetch from '../hooks/useFetch'

function ProductsPage() {

  const {data,isLoading}=useFetch()
  return  <div className=' container mx-auto flex justify-center items-center flex-wrap mt-10 gap-5'>
    {
      isLoading?(data.map((el,i)=>{
        return <div className='w-[300px] h-[300px]' key={i}>
          <img className='h-[200px] w-[300px] object-contain' src={el.thumbnail} alt="" />
          <h2 className='text-center'>{el.title} </h2>
          <h2 className='text-center'>${el.price} </h2>
        </div>
      }))
      :
      <h2>Loading...</h2>
    }
  </div>
  
}

export default ProductsPage