import React from 'react'
import { skills } from "../Assets/data";
import { Heading } from "../Components";

export const Skills = () => {
  return (
    <>
    <section id='skills' className='w-screen min-h-[70vh]  md:px-20 px-7'>

        <div className='lg:pt-20 xs:pt-5 pt-20'>
        <Heading title="My Skills"/>
        

        <div className='flex flex-wrap justify-center gap-5 items-center'>
        <div className="md:flex-1 max-w-[600px] overflow-hidden relative min-h-[300px] md:px-4 py-2 rounded-md text-white"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="100"
        >
            
            <p>
            My set of talents include, proficiency in <span className='text-contrast'>HTML</span>, <span className='text-contrast'>CSS</span>, and <span className='text-contrast'>Javascript</span>, which form the foundation of my frontend expertise. Moreover, my prowess in <span className='text-contrast'>React</span> and <span className='text-contrast'>NodeJs</span> enables me to build dynamic and powerful applications, leveraging their cutting-edge capabilities to craft seamless user interfaces and efficient server-side solutions. Additionally, I am well-versed in <span className='text-contrast'>TailwindCSS</span>, ensuring elegant and responsive designs, while my expertise in <span className='text-contrast'>ExpressJs</span> and <span className='text-contrast'>MongoDb</span> guarantees seamless backend development and robust database management. My experience with <span className='text-contrast'>Firebase</span> and <span className='text-contrast'>Redux</span> further enhances my ability to deliver scalable and feature-rich applications.
            </p>
                
        </div>

            <div className="relative w-full gap-5 flex md:flex-1 flex-wrap justify-center items-center mt-10"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
            >
            {skills.map((skill, index) => (
                <div key={index}>
                <img src={skill} alt="skills" className='w-20 h-20 rounded-md object-cover'/>
                </div>
            ))}
            </div>
        </div>

        

        </div>
    </section>
    </>
  )
}
