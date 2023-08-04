import React from 'react'
import { useAppContext } from '../Context/AppContext';
import { navLinks } from "../Assets/data";
import logo from "../Assets/Images/logo/png/logo-no-background.png";

export const Header = () => {

    const { navbar, setNavbar } = useAppContext();        

  return (
    <>
    <header className={`fixed ${navbar && "bg-bgPrimary"} bg-bgPrimary shadow-2xl z-40 py-4 md:px-20 px-10 w-screen flex items-center justify-between`}>

        <div className="logo text-white font-bold" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">    
            <a href="#">
            <img src={logo} className='md:w-[120px] w-[100px] cursor-pointer' alt="logo" />
            </a>
        </div>

        <button 
        className={`menu-btn ${navbar && 'active'} bg-transparent text-white hover:text-contrast text-[18px]`}
        onClick={() => {setNavbar(prev => !prev)}}
        data-aos="fade-up"
        data-aos-edlay="300"
        data-aos-duration="1000"
        >
            <span 
            data-text="Close"
            onClick={() => {}}
            >Menu</span>
        </button>

        {
            
            navbar && (
        <div className={`nav-container fixed top-0 -z-50 left-0 w-screen h-screen flex items-center justify-start overflow-hidden md:px-52 px-5`}>
            <nav className='absolute w-full overflow-hidden top-50 left-50 md:translate-x-[-10%]'>
                <ul 
                className='md:w-[95%] relative w-[85%] overflow-hidden flex flex-col items-start justify-center gap-3'
                >   
                {
                    navLinks.map((link, index) => (
                    <a 
                    href={`#${link.link}`} 
                    key={index} 
                    className='md:text-4xl text-2xl font-bold py-5 cursor-pointer text-white border-b-2 border-contrast hover:text-contrast md:w-[90%] w-screen' data-aos="fade-up"
                    data-aos-delay={link.delay}
                    onClick={() => setNavbar(prev => !prev)}
                    >
                        {link.name}
                    </a> 
                    ))
                }
                </ul>
            </nav>
        </div>
            )
        }
        

    </header>
    </>
  )
}
