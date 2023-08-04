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
        title: "React Ecommerce",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://pyzonecom.web.app/"
    },
    {
        img: portfolioLandingPage,
        title: "Landing Page",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://prodanish203.github.io/portfolioHeroSectionCSS/"
    },
    {
        img: rockPaperScissors,
        title: "Rock Paper Scissors",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://prodanish203.github.io/rockPaperScissorsReact/"
    },
    {
        img: summarizerDS,
        title: "SummarizerDS",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://summarizerds.web.app/"
    },
    {
        img: pyzon,
        title: "Pyzon Ecommerce",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://prodanish203.github.io/PyZon/"
    },
    {
        img: portfolio,
        title: "Portfolio Website",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus option",
        link: "https://uzairfaseeh-d3959.web.app/"
    }
]


export const servicesData = [
    {
        title: "Full-stack Development",
        desc: "jkashdfjkhajkhajkcbhjasxcjhgajhbaxc hagsdhjkbc uashdjk hkajshdjkb ui ashduo asjhd ashas uas uasas d aa u a a asuhjashjkh",
        img: responsive 
    },
    {
        title: "Web Design",
        desc: "jkashdfjkhajkhajkcbhjasxcjhgajhbaxc hagsdhjkbc uashdjk hkajshdjkb ui ashduo asjhd ashas uas uasas d aa u a a asuhjashjkh",
        img: webDesign 
    },
    {
        title: "SEO Optimization",
        desc: "jkashdfjkhajkhajkcbhjasxcjhgajhbaxc hagsdhjkbc uashdjk hkajshdjkb ui ashduo asjhd ashas uas uasas d aa u a a asuhjashjkh",
        img: seo 
    }
]