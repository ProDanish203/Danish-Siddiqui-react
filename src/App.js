import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header, Footer } from './Components';
import { About, Skills,  Contact, Home, Projects,Services } from "./Pages";
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, [])

  return (
    <>
    <div className="container w-screen min-h-screen">
      <ToastContainer/>
      <div className="hero w-screen min-h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat">

        <Header/>
        <div className='py-10'>
          <Home/>
        </div>
        
      </div>

      <div className="min-h-screen pt-20 flex flex-col gap-2 w-screen bg-bgPrimary">
         
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contact/>

        <Footer/>
        
      </div>

    </div>
    </>
  );
}

export default App;
