import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll"
export const Navbar = () => {
const [color, setcolor] = useState(false);
const changeColor=()=>{
  if(window.scrollY>=30){
    setcolor(true);
  }else{
    setcolor(false);
  }

}
window.addEventListener('scroll',changeColor)
  return (
    <nav className={`navbar navbar-expand-lg ${color? `navbar-light navbar-dark`:`navbar-dark`} sticky-top`} id='mynav' >
  <div className="container-fluid">
    <a className="navbar-brand logo" href='/' ><span>CodeCraft</span> <span>_Solution</span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link
        to='home'>
        <a className="nav-link active"href='/' aria-current="page" >Home</a>

        </Link>
                  </li>

        <li className="nav-item">
          <Link
          to='Services'>
            <a className="nav-link active" href='/' >Services</a>
          </Link>
          
        </li>
        <li className="nav-item">
          <Link
          to='Why-us'>
          <a className="nav-link active" href='/' >Why Us</a>
          </Link>
          
        </li>
        <li className="nav-item">
          <Link to='testimonials'><a className="nav-link active" href='/' >Testimonials</a></Link>
          
        </li>

        <li className="nav-item">
          <Link to='contact'><a className="nav-link active" href='/' >Contact Us</a></Link>
          
        </li>
        

        
       
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}
