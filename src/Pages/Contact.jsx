import React, { useState } from 'react'
import { contactImg } from '../Assets';

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }

  return (
    <>
    <section id='contact' className='w-screen lg:pt-12 xs:pt-5 pt-20 md:px-32 px-4 pb-20'>
      
    <div className="w-full md:mt-20 mt-10 relative flex xl:flex-row flex-col-reverse lg:gap-2 gap-4 items-center justify-center">

    <div 
    className="content md:mr-10 md:flex-[0.7] w-full flex-1 bg-bgTertiary py-8 px-4 rounded-2xl"
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-delay="300"
    >
      
      <p className="text-gray-400 text-lg font-semibold">Get in touch</p>
      <h2 className="text-white xs:text-[35px] text-[30px] font-bold">Contact Me</h2>

        <form
        onSubmit={handleSubmit}
        className='mt-2 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input 
            type="text" 
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Enter Name'
            required
            autoComplete='off'
            className='bg-bgPrimary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
            type="email" 
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Enter Email Address'
            required
            autoComplete='off'
            className='bg-bgPrimary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
            rows={7} 
            name='message'
            value={form.message}
            required
            autoComplete='off'
            onChange={handleChange}
            placeholder='What do you want to say?'
            className='bg-bgPrimary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none md:text-md text-sm border-none font-medium'
            ></textarea>
          </label>

          <button
          type='submit'
          className='bg-bgSecondary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          > 
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

    </div>

    <div className="xl:block hidden flex-1 lg:hidden md:h-[500px] h-[400px] relative" 
    data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300">
      <img src={contactImg} alt="contact us" className='w-full h-full object-cover'/>
    </div>

  

</div>

    </section>
    </>
  )
}
