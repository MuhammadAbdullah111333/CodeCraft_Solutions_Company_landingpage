
import './App.css';
import { ContactUs } from './Components/ContactUs/ContactUs';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/HeroText/Hero';
import { Navbar } from './Components/Navabar/Navbar';
import { Services } from './Components/Services/Services';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { WhyUs } from './Components/Why us/WhyUs';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Services/>
     <WhyUs/>
     <Testimonials/>
     
     <ContactUs/>
     <Footer/>
    </div>
  );
}

export default App;
