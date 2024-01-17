import React from 'react'
import './WhyUs.css'
import satis from './../../assets/analysis.png'
import rating from './../../assets/rating.png'
import medal from './../../assets/medal.png'
import transparency from './../../assets/transparency.png'

export const WhyUs = () => {
  return (
    <div className='why-us' id='Why-us'>
        <div className="top-txt">
         <span>Why Us?</span> 
         <span>The answer is based on following factors</span>
        </div>
        <div className="card-container">
            <div className="card">
                <div className="card-inner">
                <div className="card-front">
                     <img src={rating} alt="" />
                     <span>Client Satisfaction</span>
                </div>
                <div className="card-back">
                     <p>
                     We make businesses feel at home, enabling organizations to customize their team, project cycle, resources, and other aspects of digital transformation. We take pride in delivering software development and IT 
                     consultancy experience of a lifetime.
                     </p>
                </div>
                </div>
            </div>
            <div className="card">
            <div className="card-inner">
                <div className="card-front">
                     <img src={transparency} alt="" />
                     <span>Value Transparency</span>
                </div>
                <div className="card-back">
                     <p>
                     From beginning to end - CodeCraft_Solution documents an organization’s complete digital journey with us (onboarding, developing, and deploying) to ensure clarity, well-defined processes, open 
                     communication and collaboration.
                     </p>
                </div>
                </div>
            </div>
            <div className="card">
            <div className="card-inner">
                <div className="card-front">
                     <img src={medal} alt="" />
                     <span>Focus on Speciality</span>
                </div>
                <div className="card-back">
                     <p>
                     CodeCraft_Solution specializes in designing & developing web and mobile apps for startups and SMEs, enabling businesses to build, scale, and strengthen their digital existence. While we offer other commendable services, we 
                     flaunt what we do best to stand out from the crowd.
                     </p>
                </div>
                </div>
            </div>
            <div className="card">
            <div className="card-inner">
                <div className="card-front">
                     <img src={satis} alt="" />
                     <span>Believe in Results</span>
                </div>
                <div className="card-back">
                     <p>
                     Design, Automation, and Development lie at the core of CodeCraft_Solution. Working for something we’re passionate about with close collaboration and frequent communication helps us deliver products with designs that are disruptive 
                     and rank best in terms of usability.
                     </p>
                </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
