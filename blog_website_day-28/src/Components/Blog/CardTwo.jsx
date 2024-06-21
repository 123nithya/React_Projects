import React from 'react'
import Sdata from '../Slider/Sdata'

const CardTwo = () => {
  return (
    <div className="CardTwo top slide">
        {Sdata.map((value)=>{
            return(
                <div className="box">
                    <div className="img img2">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="text">
                        <span>{value.category}</span>
                        <h2>{value.title}</h2>
                        <p>{value.desc}</p>
                    </div>
                </div>
            )
        })}
      </div>
  )
}

export default CardTwo
