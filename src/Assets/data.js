import { pyzon, rockPaperScissors, reactEcom, portfolio, summarizerDS, portfolioLandingPage } from "./index";
// Skills Import
import { html,css,java,js,bootstrap,tailwind,nodejs, mongoDb,react,cpp,firebase, git,github,jquery,mysql,nextjs,php,redux, } from "./index";
// Services Images
import { responsive,seo, webDesign } from "./index";


export const skills = [html,css,js,bootstrap,tailwind,firebase,react,nodejs,mongoDb,git,github,nextjs,redux,php,mysql,jquery,java,cpp];

export const navLinks = [
    {
        name: "Home",
        link: "home",
        delay: 250,
    },
    {
        name: "About",
        link: "about",
        delay: 400,
    },
    {
        name: "Skills",
        link: "skills",
        delay: 550,
    },
    {
        name: "Projects",
        link: "projects",
        delay: 700,
    },
    {
        name: "Contact",
        link: "contact",
        delay: 850,
    },
]

export const projectData = [
    {
        img: reactEcom,
        title: "Ecommerce Landing Page",
        desc: "An Ecommerce Landing page built with React that display the store information and product listings with filters and with responsive, eye-catching design for better UI/UX expereince.",
        link: "https://pyzonecom.web.app/"
    },
    {
        img: portfolioLandingPage,
        title: "Landing Page",
        desc: "A Portfolio landing page with great and smooth animations to display a person or bussines's information, built from scratch with HTML,CSS and Js",
        link: "https://prodanish203.github.io/portfolioHeroSectionCSS/"
    },
    {
        img: rockPaperScissors,
        title: "Rock Paper Scissors",
        desc: "A Rock Paper Scissors game prototpe built on React, where user can play with computer and the score updates ontime. Design inspiration from the FrontEndMentors",
        link: "https://prodanish203.github.io/rockPaperScissorsReact/"
    },
    {
        img: summarizerDS,
        title: "SummarizerDS",
        desc: "A React AI Application that takes url of any blog or article as an input from the user then creates a summmary for the article itself using Artificial Intelligence",
        link: "https://summarizerds.web.app/"
    },
    {
        img: pyzon,
        title: "Pyzon Ecommerce",
        desc: "A branded ecommerce store landing page built from scratch with dark mode functionality and responsive, eye-catching design using grids and flexbox.",
        link: "https://prodanish203.github.io/PyZon/"
    },
    {
        img: portfolio,
        title: "Portfolio Website",
        desc: "A complete portfolio website that showcases the bussiness and person's information and details with responsive and interactive design, bult from scratch.",
        link: "https://uzairfaseeh-d3959.web.app/"
    }
]


export const servicesData = [
    {
        title: "Full-stack Development",
        desc: "I offer comprehensive Full-Stack Web Development services, creating modern and engaging websites and applications. With expertise in frontend and backend technologies, I deliver seamless user experiences and efficient functionality to meet your unique business needs.",
        img: responsive 
    },
    {
        title: "Web Design",
        desc: "As a Frontend Web Developer, I specialize in crafting responsive and visually captivating designs that adapt flawlessly across all devices. My focus on user-centric experiences ensures your website leaves a lasting impression on visitors.",
        img: webDesign 
    },
    {
        title: "SEO Optimization",
        desc: "I specialize in building web applications that achieve SEO optimization, ensuring your digital presence ranks higher and attracts a broader audience. With a strategic approach and technical expertise, I enhance your online visibility and drive organic traffic to your platform.",
        img: seo 
    }
]