import React,{ Component } from 'react'

export const Bird = () =>{

    return (
        <div className="bird" style={birdStyle}>
            <figure style={figureStyle} ><span></span>Follow your interest.</figure>
            <figure style={figureStyle} ><span></span>Hear what people are talking about</figure>
            <figure style={figureStyle} ><span></span>Join the conversation</figure>
        </div>
    )
}


const birdStyle = {
    background:"#1da1f2"
}
const figureStyle = {
    fonSize:"18px",
    fontWeight:"bolder",
    fontFamily:"Segoe UI, Arial, sans-serif",
    lineHeight:"45px",
    color:"white"
    
}
