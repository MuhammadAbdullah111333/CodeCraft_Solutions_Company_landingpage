import React from "react";
import "./Testimonials.css";
import first from "./../../assets/albert-dera-ILip77SbmOE-unsplash.jpg";
import second from "./../../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import third from "./../../assets/petr-sevcovic-HzDF-rxlSeM-unsplash.jpg";
import fourth from "./../../assets/pexels-emre-keshavarz-3501159.jpg";
import fifth from "./../../assets/pexels-linkedin-sales-navigator-2182970.jpg";
import sixth from "./../../assets/pexels-sora-shimazaki-5668774.jpg";
export const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="text">
        <span>Testimonials</span>
        <span>Here is what Our Clients say about Us</span>
      </div>

      <div className="first-row">
        <div className="box-t">
          <div className="img">
            <img src={first} alt="" id="img" />
            <span className="owner">Mark S. CEO of Codies</span>
          </div>

          <div className="test-txt" id="test-txt">
            I had the pleasure of working with CodeCraft_Solution for the development
            of my e-commerce website, and I couldn't be happier with the
            results. The team at ABC Web Solutions demonstrated their expertise
            and professionalism throughout the entire process.
          </div>
        </div>

        <div className="box-t">
          <div className="img">
            <img src={second} alt="" id="img" />
            <span className="owner">Luois K. Manger at Codepen</span>
          </div>

          <div className="test-txt" id="test-txt">
            Working with CodeCraft_Solution was an absolute pleasure. Their team of
            skilled professionals delivered a website that exceeded my
            expectations. From the initial consultation to the final launch,
            they were attentive, responsive, and committed to ensuring my vision
            came to life
          </div>
        </div>
        <div className="box-t">
          <div className="img">
            <img src={third} alt="" id="img" />
            <span className="owner">Bezos T. CEO of Avalon</span>
          </div>

          <div className="test-txt" id="test-txt">
            I cannot speak highly enough of CodeCraft_Solution. Their team went above
            and beyond to deliver a website that perfectly aligned with my
            business goals. Their attention to detail and ability to create a
            seamless user experience truly impressed me.
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="box-t">
          <div className="img">
            <img src={fourth} alt="" id="img" />
            <span className="owner">Holland M. Team Manager at Sm-Dev</span>
          </div>

          <div className="test-txt" id="test-txt">
            Working with CodeCraft_Solution was an exceptional experience. From the
            moment I reached out to them, I knew I was in good hands. Their team
          collaborated closely with me to
            bring my vision to life.
          </div>
        </div>
        <div className="box-t">
          <div className="img">
            <img src={fifth} alt="" id="img" />
            <span className="owner">John S. CEO Of CodeHub</span>
          </div>

          <div className="test-txt" id="test-txt">
            CodeCraft_Solution exceeded my expectations in every way. Their team of
            experts guided me through the entire web development process,
            offering valuable insights and suggestions along the way.
          </div>
        </div>
        <div className="box-t">
          <div className="img">
            <img src={sixth} alt="" id="img" />
            <span className="owner">Tom J. Buisness Owner</span>
          </div>

          <div className="test-txt" id="test-txt">
            Working with CodeCraft_Solution has been a game-changer for my business.
            Their team of skilled professionals took my outdated website and
            transformed it into a modern and user-friendly platform.
          </div>
        </div>
      </div>
     <div className="contact-box">
    
    <div className="left-c">
      <span>Talk to us and get your</span>
      <span> Project Done!</span>
    </div>
    <div className="right-c">
     
      <button type="button" class="btn btn-warning">Contact Us &rarr;</button>
    </div>
     </div>
    </div>
  );
};
