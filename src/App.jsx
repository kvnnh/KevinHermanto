import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import { useEffect, useRef } from 'react';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import ScrollUp from './components/scrollup/ScrollUp.jsx';
import Work from './components/work/Work.jsx';

function App() {
  const circles = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const gradient = 'linear-gradient(150deg, #f9f9f9, #e2e5e2, #cad1cd, #b3beb9, #9baba7, #859896, #6f8587, #5a737a, #46616d, #344f61, #233d56, #142b4e)';

    circles.current.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundImage = gradient;
      circle.style.backgroundSize = "cover";
    });
  
    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    const animateCircles = () => {
      let { x, y } = coords.current;
  
      circles.current.forEach((circle) => {
        const nextIndex = circles.current.indexOf(circle) + 1;
        const nextCircle = circles.current[nextIndex % circles.current.length];
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${(circles.current.length - circles.current.indexOf(circle)) / circles.current.length})`;
  
        circle.x = x;
        circle.y = y;
        x += (nextCircle.x - x) * 0.6;
        y += (nextCircle.y - y) * 0.6;
      });
  
      requestAnimationFrame(animateCircles);
    };
  
    animateCircles();
  
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  

  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="circle"
          ref={(el) => (circles.current[i] = el)}
        ></div>
      ))}
      <Header />
      <main className="main">
        <Home />
        <br /><br /><br /><br />
        <About />
        <br /><br /><br /><br />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
