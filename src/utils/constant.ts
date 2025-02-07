import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export const MainMenuListItem: Array<string> = ["Intro", "About", "Expertise", "Experience", "Portfolio"]

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
        level: "Graduate Certificate in Artificial Intelligence",
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

export const Experiences = [
    {
        start: "2023",
        end: "2024",
        timeframe: "January 2024 - April 2024",
        company: "Botree Inc.",
        position: "AI Software Engineer",
        location: "Barrie, Ontario",
        responsibilities: [
            "Company overview: Botree Inc | Level-Up™ Training for Organizations.",
            "Collaborated with a client organization as part of a capstone project, dedicating ~8 hours/week.",
            "Designed and deployed AI-powered learning modules using React, Django, OpenAI models, LangChain, and Pinecone.",
            "Built an architecture based on Retrieval-Augmented Generation (RAG), improving content delivery efficiency.",
        ]
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "May 2021 - September 2023",
        company: "Proshore Nepal",
        position: "NodeJs Developer",
        location: "Kathmandu, Nepal",
        responsibilities: [
            "Company overview: PROSHORE ready-to-code dev teams.",
            "Developed scalable B2B and B2C web applications utilizing different JavaScript frameworks.",
            "Managed server deployment, improved CI/CD using Bitbucket and GitLab to reduce deployment time.",
            "Initiated update of lambda functions of old application to the latest version, improving code quality and decreasing urgent issue requests.",
            "Integrated Salesforce & HubSpot API to automate data synchronization for an e-commerce platform, reducing manual tasks by 40%.",
            "Mentored junior developers, conducted peer reviews, and led Scrum meetings to ensure on-time project delivery.",
            "Built XML parsers to facilitate seamless data sharing across multiple platforms, reducing processing time.",
        ]
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "December 2019 - May 2021",
        company: "E-signature",
        position: "NodeJs Developer",
        location: "Kathmandu, Nepal",
        responsibilities: [
            "Company overview: Website Design and Development Company in Nepal | E-Signature.",
            "Worked on full stack web development, their codebase architecture, and database design, planning, and critical analysis.",
            "Implemented ETL to scrape data from different e-commerce and social platforms to develop analytical web applications.",
            "Conducted unit and API testing with Mocha and Chai, improving test coverage by 25%.",
        ]
    },
    {
        start: "2018",
        end: "2019",
        timeframe: "October 2018 - July 2019",
        company: "Palmmind IT Consultancy",
        position: "Software Trainee",
        location: "Kathmandu, Nepal",
        responsibilities: [
            "Company overview: Palmmind - Palm Mind Technology.",
            "Built web applications using MEAN stack under the guidance of project leads.",
            "Developed chatbots for Banking and Commercial sectors using Dialogflow.",
            "Assisted in debugging and troubleshooting issues related to HTML, CSS, JavaScript, and Loopback frameworks.",
        ]
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
        link: "https://www.facebook.com/NaradMuniApp/",
        imageUrl: "src\\assets\\images\\Naradmuni.png"
    },
    {
        name: "Chatbots",
        link: "https://www.laxmisunrise.com/",
        imageUrl: "src\\assets\\images\\laxmiddbot.png"
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

]

export const ExpertiseContent = {
    "Languages & Frameworks": "JavaScript, TypeScript, Python, SQL, Node.js, NestJS, Express.js, React, Mocha, Chai.",
    "Databases": "MySQL, Postgres, MongoDB, Redis.",
    "Cloud Platforms": `AWS, Azure, Heroku`,
    "DevOps & Tools": "Git, Docker, Postman, Swagger, Jira, CI / CD(Bitbucket, GitLab), PowerBI, Tableau.",
    "Data Science": "Hugging Face, TensorFlow, Scikit - learn, Spark.",
    "Core": "OOP, Data Structures & Algorithms, Cloud Computing, AI Infrastructure & Architecture."
}

export const SocialLinks = [
    { href: "https://www.facebook.com/aacict", icon: faFacebook, style: { color: "#74C0FC" } },
    { href: "https://github.com/aacict/", icon: faGithub },
    { href: "https://www.linkedin.com/in/aacict/", icon: faLinkedin, style: { color: "#74C0FC" } },
];

export const defaultParticleOption = {
    background: {
        color: {
            value: "#222222",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: false,
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
