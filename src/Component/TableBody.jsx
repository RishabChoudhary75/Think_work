import React from 'react'


function TableBody({products}) {
    let name= products.stocked?products.name:<span className='text-red-900'>{products.name}</span>
    let price= products.price
   
    
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
      
    </>
  )
}

export default TableBody
