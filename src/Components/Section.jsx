import React, { useState } from 'react'
import myFace from "../assets/images/myFace.jpg";
import { IoIosMail } from "react-icons/io";
const Section = () => {
  
    return (
        <>
            <section className="section" id='Section'>
                <div className="container">
                    <div className="intro">
                        <div className="intro_box">
                            <h1 className="intro_box_title">Hi, I am Farokhiddin, Front end development.</h1>
                            <p className="intro_box_text">Hello! I'm Farahuddin, a new developer in the fast-paced IT world.
                                I can create well-designed software for your business</p>

                                <a className="intro_box_btn" href="mailto:farohidingithub@gmail.com">
                                Hire me!
                                <IoIosMail />
                                </a>
                          
                        </div>
                        <img src="me.jpg" alt="" className="intro_img" />
    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section