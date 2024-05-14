import React from 'react'
import "./Cardinfo.css"

interface CardInfoProps {
    color: string;
    name: string;
    percent: string;
    hideCircle?: boolean;
  }

  const Cardinfo: React.FC<CardInfoProps> = ({ color, name, percent, hideCircle }) => {
    
  return (
    <div className='Cardinfo'>
        { !hideCircle && <div 
        style={{
            width: '16px', 
            height: '16px', 
            borderRadius:"50%",
            backgroundColor:`${color}`,
            // padding: "12px"
        }}>
      </div> }
        <p className='CardTitle'>{name}</p>
        <p>{percent}</p>
    </div>
  )
}

export default Cardinfo
