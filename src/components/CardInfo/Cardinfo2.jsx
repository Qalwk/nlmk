import React from 'react'
import "./Cardinfo.css"

  const Cardinfo = ({ color, name, percent}) => {
    
  return (
    <div className='Cardinfo'>
      <div 
        style={{
            width: '16px', 
            height: '16px', 
            borderRadius:"50%",
            backgroundColor:`${color}`,
            // padding: "12px"
        }}>
      </div>
        <p className='CardTitle'>{name}</p>
        <p>{percent}</p>
    </div>
  )
}

export default Cardinfo
