import React from 'react'
import "../assets/sass/main.scss";
import engFlag from "../assets/images/Uk.png";
import uzFlag from "../assets/images/uz.png";
import ruFlag from "../assets/images/ru.png";
import carol from "../assets/images/carol.png"
const Nav = () => {
  return (
    <>
      <nav className="nav" id='nav'>
        <div className="container"  >
          <div className="nav_box">


          <div className="nav_box_tp">
            <div className="nav_box_png">
            <img src={carol}alt="" />
            <h1  className="nav_box_tp_title">KFB </h1>
            </div>
            <p>Karimkulov Farokhidin Burkhanidinovich</p>

            </div>
            <h3 className='nav_box_title' >Karimkulov Farokhidin Burkhanidinovich</h3>
            <ul className="nav_box_ul">
            <li><a href="#About Mee " className="nav_box_ul_link">About Me</a></li>
              <li>
                <a href="#service" className="nav_box_ul_link" >Service</a>
              </li>
              <li><a href="#Work" className="nav_box_ul_link">Work</a></li>
              <li><a href="#Contact" className="nav_box_ul_link">Contact</a></li>


            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Nav