import React from 'react'
import "./Spinner.css"

 const Spinner = () => {
  return (
    <div >
      <div className='custom-loader'></div>
      <p className='text-xl font-bold text-center'> Loading.... </p>
    </div>
  )
}
export default Spinner;