import React from 'react'
import "../cssFile/First.css"




function First({heading, value, span1, span2, img, classname }) {
  return (
    
    <div className="first_box">
        
        <p className='head'>{heading}</p>
        
        <div className='body'>
            <div className='first_box_left'>
                <h2>{value}</h2>
                <p>
                    <span className={`${classname}`}>{span1}</span>
                    <span className='span2'>{span2}</span>
                </p>
            </div>
            <div className='first_box_right'>
                <img src={img} alt='Graph'/>
            </div>
        </div>
    </div>
    
  )
}

export default First