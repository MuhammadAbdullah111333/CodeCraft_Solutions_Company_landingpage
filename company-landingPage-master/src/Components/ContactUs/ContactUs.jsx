import React from 'react'
import './ContactUs.css'


export const ContactUs = () => {
  return (
    <div className='contact-us' id='contact'>  
    <div className="home spacing">
   <span>Home</span>
   <span>Services</span>
   <span>About Us</span>
   <span>Contact Us</span>
    </div>
    <div className=" spacing">
    <span>Services</span>
   <span>On Demand Agile Development</span>
   <span>Cloud Engineering</span>
   <span>BlockChain Developoment</span>
    </div>
    <div className="whyUs spacing">
    <span>Why Us?</span>
   <span>Value Transparency</span>
   <span>Focus on Speciality</span>
   <span>Believe in Results</span>
    </div>
     <div className="newsletter spacing">
        <span>Newsletter</span>
        <span>Subscribe to our digital newsletter and </span>
        <span>get updates about industry and us</span>
        <span>
        <form action="" className='email-container' >
          <input type="email" name='userEmail' placeholder='Enter Your Email' />
          <button className='btn btn-j btn-warning'>Submit</button>
         </form>
        </span>
       
     </div>
   
    
   
     </div>

       
   
  )
}

