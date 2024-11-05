export const MainMenuListItem: Array<string> = ["Intro", "About", "Expertise", "Academic", "Portfolio"]

export const FirstName = "Ashish"
export const LastName = "Thapa"
export const PersonalStatement = "Passionate Software Engineer | Computer Engineering Graduate 🎓 | Graduate Certificate in Artificial Intelligence 🎓 | Graduate Certificate in Big Data Analytics 🎓 | Years of Experience in Crafting Scalable Solutions 💻 | Committed to Continuous Learning and Innovation 🌟 | Let's connect and explore the limitless possibilities at the intersection of code and creativity! 👨‍💻 #Web applications #Data Science #Machine Learning & AI Solutions"
export const Designation = "Software Engineer"

export const Education = [
    {
        completedYear: "Expected Graduation Year: April 2025",
        institution: "Georgian College",
        affiliation: "",
        level: "Graduate Certificate in Big Data Analytics",
        location: "Ontario, Canada"
    },
    {
        completedYear: "Graduated Year: 2024",
        institution: "Georgian College",
        affiliation: "",
        level: "Graduate Certificate in Artificial Intelligence: Architecture, Design, and Implementation",
        location: "Ontario, Canada"
    },
    {
        completedYear: "Graduated Year: 2018",
        institution: "Kantipur Engineering College",
        affiliation: "",
        level: "Bachelor’s in Computer Engineering",
        location: "Lalitpur, Nepal"
    },
]

export const Experience = [
    {
        start: "2023",
        end: "2024",
        timeframe: "Jan 2024 to April 2024",
        company: "Botree Inc.",
        position: "AI Software Engineer",
        location: "Barrie, Ontario",
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "May 2021 to Sept. 2023",
        company: "Proshore Nepal Pvt. Ltd.",
        position: "NodeJs Developer",
        location: "Kathmandu, Nepal",
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "Dec. 2019 to May 2021",
        company: "E-signature Pvt. Ltd.",
        position: "NodeJs Developer",
        location: "Kathmandu, Nepal",
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "Oct. 2018 to July 2019",
        company: "Palmmind IT Consultancy Pvt. Ltd.",
        position: "Software Trainee",
        location: "Kathmandu, Nepal",
    },
]

export const SoftSkills = [
    "Adept at evaluating situations objectively and making sound decision making based on thorough critical analysis.",
    "Dedicated to nurturing an environment of open and transparent communication, facilitating mutual understanding, and accompanying objectives through concise and impactful interactions.",
    "Ability to rapidly acquire new knowledge and skills, adapt to field dynamics, and mitigating potential escalations through proactive skill development and industry trends.",
    "Proficient in meticulously optimizing workflow efficiency, adeptly prioritizing tasks, and consistently meeting deadlines while upholding the highest standards of work quality."
]

export const projects = [
    {
        name: "Learning Modules",
        link: "https://www.botreeinc.com/",
        imageUrl: `src\\assets\\images\\botree.png`
    },
    {
        name: "OrderXL",
        link: "https://orderxl.com/",
        imageUrl: "src\\assets\\images\\orderXL.png"
    },
    {
        name: "Surebird",
        link: "https://www.surebird.nl/",
        imageUrl: "src\\assets\\images\\Surebird.png"
    },
    {
        name: "Tibo Energy",
        link: "https://tibo.energy/",
        imageUrl: "src\\assets\\images\\tibo.png"
    },
    {
        name: "Sdoky",
        link: "https://www.sdoky.com/en",
        imageUrl: "src\\assets\\images\\sdoky.png"
    },
    {
        name: "ORANGE STUDIO",
        link: "https://ankaek.com/our-games",
        imageUrl: "src\\assets\\images\\ocarrom.png"
    },
    {
        name: "Narad Muni",
        link: "",
        imageUrl: "src\\assets\\images\\Naradmuni.png"
    },
    // {
    //     name:"My Social View",
    //     link:"",
    //     imageUrl: "src\\assets\\images\\blackp.png"
    // },
    // {
    //     name:"Worker pros",
    //     link:"",
    //     imageUrl: "src\\assets\\images\\blackp.png"
    // },
    // {
    //     name:"Chatbots",
    //     link:"",
    //     imageUrl: "src\\assets\\images\\blackp.png"
    // },
]

export const ExpertiseContent = {
    langFrames: "JavaScript, Nodejs, NestJs, ExpressJs, Typescript, Python, Mocha & Chai, React",
    databases: "SQL [ MySQL, PostgreSQL], NOSQL [MongoDB], Redis",
    otherToolsTechnologies: "REST API, Template Engines [ EJS ], Version Control [ Git ] , Amazon web services(AWS), Azure, Heroku, Third party API Integration, Docker, Postman, Swagger, Jira, Agile, Hugging Face, NLTK, OpenCV.",
    relavantCoursework: "Cloud Computing, Database Management System (DBMS), Data Structures & Algorithms, Object-Oriented Programming (OOP), AI algorithms & Mathematics, Natural language Processing (NLP), Neural Networks (NN), Computer Vision, AI infrastructure & Architecture [ Azure, AWS ], Machine Learning Programming & Frameworks"
}



export const defaultParticleOption = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true
}

export const SidebarParticleOption = {
    background: {
        color: {
            value: "#BEBEBE",
        },
    },
    fpsLimit: 500,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#000",
        },
        links: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 3.6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 180,
            },
            value: 90,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "traingle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true
}

export const resumeParticleOption = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true
}
