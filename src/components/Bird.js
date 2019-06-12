import React,{ Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch, faUserFriends, faComment } from '@fortawesome/free-solid-svg-icons'


export const Bird = () =>{

    return (
        <div className="bird">
            <section>
            <figure style={figureStyle} ><span><FontAwesomeIcon icon={faSearch} size="2x" /></span>Follow your interest.</figure>
            <figure style={figureStyle} ><span><FontAwesomeIcon icon={faUserFriends} size="2x" /></span>Hear what people are talking about</figure>
            <figure style={figureStyle} ><span><FontAwesomeIcon icon={faComment} size="2x" /></span>Join the conversation</figure>
            </section>
        </div>
    )
}



const figureStyle = {
    fonSize:"18px",
    fontWeight:"bolder",
    fontFamily:"Segoe UI, Arial, sans-serif",
    lineHeight:"45px",
    color:"white",
    alignSelf:"center",
}

