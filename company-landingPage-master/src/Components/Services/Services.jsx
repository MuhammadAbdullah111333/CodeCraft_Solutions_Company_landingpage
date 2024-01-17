import React from 'react'
import './Service.css'
export const Services = () => {
  return (
    <div className='services' id='Services'>
         <div className="services-txt">
            <span> Services</span>
            <span>We offer tailor-made software development services for startups, medium</span>
            <span>sized companies, and large enterprises, from dedicated teams to custom</span>
            <span>software development</span>

         </div>
         <div className="box-wrap">
         <div className="box">
          <span>Digital Product Design</span>
          <span className='list'>
          <li>Development</li>
          <li>ProtoTyping</li>
          <li>Ideation</li>
          <li>UI/UX</li></span>
         </div>
         <div className="box">
         <span>On Demand Agile Development</span>
          <span className='list'>
          <li>Dedicated Team</li>
          <li>Team Leads</li>
        </span>
         </div>
         <div className="box">
         <span>Cloud Engineering</span>
          <span className='list'>
          <li>AWS/Azure/Google Cloud</li>
          <li>Implementing DevOps</li>
          <li>Cloud Implementing</li>
        </span>
         </div>
         <div className="box">
         <span>BlockChain Development</span>
          <span className='list'>
          <li>Public and Private Networks</li>
          <li>Wallets Exchanges</li>
        </span>
         </div>
         </div>
        
    </div>
  )
}
