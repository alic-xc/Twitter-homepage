import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () =>{

    return (
        <div className="main-pane">
            <div class="pane">
                <section className="flex">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#00abf1" />
                    <button>Log in</button>
                </section>
                <section>
                    <p>See what's happening in the world right now</p>
                    <p>join Twitter today</p>

                </section>
                <section className="button-display">
                    <button style={buttonStyle}>Sign up</button>
                    <button style={buttonStyle}>Log in</button>
                </section>
            </div>
        </div>
    )

}

const buttonStyle = {
    padding:"5px",
    width:"150px",
    
}


