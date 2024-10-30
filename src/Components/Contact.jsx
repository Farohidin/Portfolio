import React from 'react'
import { SiTelegram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { useState } from 'react';
import Comment from './Comment';
import { IoMdStar } from 'react-icons/io';
const Contact = () => {
    const [text, setText] = useState("")
    const [comment, setComment] = useState(JSON.parse(localStorage.getItem("comment")) || [
        {
            rating: 5,
            text: "Nice Job Farohiddin!"
        }
    ])
    
console.log(comment);

    return (
        <>
            <div className="container">
                <h2 className="title">Contact</h2>
            </div>
            <footer className="footer" id='Contact' >

                <div className="container">
                    <div className="footer_box">

                        <div className="footer_box_left">
                            <ul className="footer_box_left_ul">
                                <li><a href="#nav" className="footer_box_left_ul_link">About Me</a></li>
                                <li>
                                    <a href="#service" className="footer_box_left_ul_link" >Service</a>
                                </li>
                                <li><a href="#Work" className="footer_box_left_ul_link">Work</a></li>
                                <li><a href="#1" className="footer_box_left_ul_link">Contact</a></li>


                            </ul>
                        </div>
                        <div className="footer_box_right">
                            <a className="footer_box_right_link" href="https://t.me/Karimkulovvvv" target="_blank">
                                <SiTelegram />
                                <h3>Telegram</h3>
                            </a>


                            <a className="footer_box_right_link" href="https://www.instagram.com/" target="_blank">

                                <FaInstagram />
                                <h3>Instagram</h3>
                            </a>

                            <a className="footer_box_right_link" href="https://github.com/Farohidin    " target="_blank">

                                <FaGithub />
                                <h3>GitHub</h3>
                            </a>

                            <a className="footer_box_right_link" href="tel:+998505080296">

                                <MdAddCall />
                                <h3>Call Mee</h3>
                            </a>
                        </div>  
                        <div className="footer_cent">
                            <div className="footer_cent_left">
                            {/* <h2 className="footer_cent_title">I'm Farokhiddin</h2>
                            <p className="footer_cent_text">Nice to meet you ;</p> */}
                            
                            </div> 
                            <Comment setComment={setComment} comment={comment} text={text} setText={setText}/>
                            <div className="footer_cent_text" >
                            
                            <p className="footer_cent_text">Did you like my Portfolio?</p>
                                {comment.map((item, index)=>(
                                    <p key={index}>
                                        <span >{item.text}</span>
                                        <span className="starComment">
                                            {Array.from(({length: item.rating}), (_, i) => (
                                                <IoMdStar  key={i}/>
                                            ))}
                                        </span>
                                    </p>
                                ))}
                            </div>
                            
                            

                            
                        </div>
                        

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Contact