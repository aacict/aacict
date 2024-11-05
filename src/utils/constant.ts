export const MainMenuListItem: Array<string> = ["Intro", "About", "Expertise", "Academic", "Portfolio"]


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
