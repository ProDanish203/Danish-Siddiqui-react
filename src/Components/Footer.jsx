import React from 'react'
import logo from "../Assets/Images/logo/png/logo-color.png";

export const Footer = () => {
  return (
    <>
    <footer className='relative md:p-10 md:py-16 py-10 p-7 bg-bgTertiary flex justify-between flex-wrap gap-10'>
      <div>
        <img src={logo} alt="footer-logo" className='w-[170px] shadow-2xl rounded-xl' />
      </div>

      <div>
        <h3 className='text-3xl font-bold text-contrast'>What can i Offer</h3>
        <div className='flex flex-col justify-center gap-2 mt-5'>

          <p className='text-gray-300 max-w-[300px] text-md'>
            you can contact me through my email address or telephone number for any kind of service you want to hire. <br /><br /> I am an intern full stack web developer and eager to work with potential clients and company and develop my experience in this field
          </p>
        </div>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-contrast'>Contact Me...</h3>
        <div className='flex flex-col justify-center gap-2 mt-5'>

          <address className='text-gray-300 text-lg'>Karachi, Pakistan</address>
          <p className='text-white'><span className='text-gray-400 font-[300]'>Email:</span> danishsidd203@gmail.com</p>
          <p className='text-white'><span className='text-gray-400 font-[300]'>Phone:</span> +92-318-1380583</p>

        </div>
      </div>

      <div className='md:mr-24 mr-0'>
        <h3 className='text-3xl font-bold text-contrast'>Socials</h3>
        <div className='flex flex-col justify-center gap-2 mt-5'>

          <ul className='flex flex-col justify-center gap-3'>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-github text-lg mr-2'></i> Github</a></li>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-linkedin text-lg mr-2'></i> LinkedIn</a>
            </li>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-google text-lg mr-2'></i> Gmail</a>
            </li>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-facebook-f text-lg mr-2'></i> Facebook</a>
            </li>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-instagram text-lg mr-2'></i> Instagram</a>
            </li>
            <li className='hover:text-purple-500 text-white cursor-pointer text-md'>
              <a href="#"><i className='fab fa-twitter text-lg mr-2'></i> Twitter</a>
            </li>
          </ul>

        </div>
      </div>

    </footer>
    </>
  )
}