import {
  faJs,
  faPython,
  faReact,
  faNodeJs,
  faGit,
  faDocker,
  faGitlab,
  faBitbucket,
  faAws,
  faMicrosoft,
  faJira,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCode,
  faServer,
  faCube,
  faCubes,
  faFeatherAlt,
  faMugHot,
  faPaperPlane,
  faChartPie,
  faNetworkWired,
  faLeaf,
  faSmile,
  faBolt,
  faChartColumn,
  faHSquare,
  faDatabase,
  faProjectDiagram,
  faCloud,
  faComputer,
} from "@fortawesome/free-solid-svg-icons";
import botreeimg from "../assets/images/botree.png";
import orderXlImg from "../assets/images/orderXL.png";
import surebirdImg from "../assets/images/surebird.png";
import tiboImg from "../assets/images/tibo.png";
import sdokyImg from "../assets/images/sdoky.png";
import naradMuniImg from "../assets/images/Naradmuni.png";
import laxmiBotImg from "../assets/images/laxmiddbot.png";
import personalProtfolio from "../assets/images/personalProtfolio.png";
import blackp from "../assets/images/blackp.png";
import ai from "../assets/images/ai.jpg";
import sentiment from "../assets/images/sentiment.jpg";
import objectDet from "../assets/images/objectDet.jpg";
import stockApp from "../assets/images/stockApp.jpg";
import alghawali from "../assets/images/alghawali.png";
import alghwaliAdmin from "../assets/images/alghawaliAdmin.png";
import tot from "../assets/images/thinkOnTrip.png";

export const MainMenuListItem: Array<string> = [
  "Intro",
  "About",
  "Expertise",
  "Professional",
  "Personal",
];

export const FirstName = "Ashish";
export const LastName = "Thapa";
export const PersonalStatement =
  "Passionate Software Engineer | Computer Engineering Graduate 🎓 | Graduate Certificate in Artificial Intelligence 🎓 | Graduate Certificate in Big Data Analytics 🎓 | Years of Experience in Crafting Scalable Solutions 💻 | Committed to Continuous Learning and Innovation 🌟 | Let's connect and explore the limitless possibilities at the intersection of code and creativity! 👨‍💻 #Web applications #Data Science #Machine Learning & AI Solutions";
export const Designation = "Software Engineer";

export const Education = [
  {
    completedYear: "Expected Graduation Year: April 2025",
    institution: "Georgian College",
    affiliation: "",
    level: "Graduate Certificate in Big Data Analytics",
    location: "Ontario, Canada",
  },
  {
    completedYear: "Graduated Year: 2024",
    institution: "Georgian College",
    affiliation: "",
    level: "Graduate Certificate in Artificial Intelligence",
    location: "Ontario, Canada",
  },
  {
    completedYear: "Graduated Year: 2018",
    institution: "Kantipur Engineering College",
    affiliation: "",
    level: "Bachelor’s in Computer Engineering",
    location: "Lalitpur, Nepal",
  },
];

export const Experiences = [
  {
    start: "2025",
    end: "Present",
    timeframe: "January 2025 - Present",
    company: "Al Ghawali Manpower Supply",
    position: "Software Developer",
    location: "Sohar, Oman",
    responsibilities: [
      `<p><a href="https://www.alghawalimanpower.com/" class="underline" target="_blank" rel="noopener noreferrer">Al Ghawali Manpower Supply</a>.</p>`,
      "Spearheaded end-to-end revamp of legacy systems following an incomplete and unauthorized handover by the previous developer; recovered and restored critical code from servers to bring core applications live.",
      "Set up GitHub repositories and integrated CI/CD pipelines, reducing deployment time by 50% and enabling automated, error-free releases.",
      "Took direct responsibility for gathering client requirements and translating them into actionable technical plans aligned with existing system infrastructure.",
      "Directed UI/UX efforts based on evolving client needs; provided day-to-day technical directions to UI/UX and developer.",
      "Architected and developed scalable web applications, including multi-company websites and internal workflow systems.",
      "Built an all-in-one admin panel to manage visa processes, worker tracking, and internal accounting workflows, reducing manual processing time by 60%.",
      "Conducted continuous research and planning for infrastructure improvements, feature enhancements, and performance optimization.",
      "Managed deployment within a single-host standalone environment using cost-effective strategies and shared server infrastructure.",
      "Collaborated with a client organization as part of a capstone project, dedicating ~8 hours/week.",
      "Designed and deployed AI-powered learning modules using React, Django, OpenAI models, LangChain, and Pinecone.",
      "Built an architecture based on Retrieval-Augmented Generation (RAG), improving content delivery efficiency.",
    ],
    projects: [
      {
        name: "Alghwali Website",
        link: "https://www.alghawalimanpower.com/",
        imageUrl: alghawali,
      },
      {
        name: "Alghwali Admin Panel",
        link: "https://access.alghawalimanpower.com/",
        imageUrl: alghwaliAdmin,
      },
      {
        name: "Think On Trip",
        link: "https://thinkontrip.com/",
        imageUrl: tot,
      },
    ],
  },
  {
    start: "2023",
    end: "2024",
    timeframe: "January 2024 - April 2024",
    company: "Botree Inc.",
    position: "AI Software Engineer",
    location: "Barrie, Ontario",
    responsibilities: [
      `<p><a href="https://www.palmmind.com" class="underline" target="_blank" rel="noopener noreferrer">Botree Inc | Level-Up™ Training for Organizations</a>.</p>`,
      "Collaborated with a client organization as part of a capstone project, dedicating ~8 hours/week.",
      "Designed and deployed AI-powered learning modules using React, Django, OpenAI models, LangChain, and Pinecone.",
      "Built an architecture based on Retrieval-Augmented Generation (RAG), improving content delivery efficiency.",
    ],
    projects: [
      {
        name: "Learning Modules",
        link: "https://www.botreeinc.com/",
        imageUrl: botreeimg,
      },
    ],
  },
  {
    start: "2018",
    end: "2019",
    timeframe: "May 2021 - September 2023",
    company: "Proshore Nepal",
    position: "NodeJs Developer",
    location: "Kathmandu, Nepal",
    responsibilities: [
      `<p><a href="https://www.palmmind.com" class="underline" target="_blank" rel="noopener noreferrer">PROSHORE ready-to-code dev teams</a>.</p>`,
      "Developed scalable B2B and B2C web applications utilizing different JavaScript frameworks.",
      "Managed server deployment, improved CI/CD using Bitbucket and GitLab to reduce deployment time.",
      "Initiated update of lambda functions of old application to the latest version, improving code quality and decreasing urgent issue requests.",
      "Integrated Salesforce & HubSpot API to automate data synchronization for an e-commerce platform, reducing manual tasks by 40%.",
      "Mentored junior developers, conducted peer reviews, and led Scrum meetings to ensure on-time project delivery.",
      "Built XML parsers to facilitate seamless data sharing across multiple platforms, reducing processing time.",
    ],
    projects: [
      {
        name: "OrderXL",
        link: "https://orderxl.com/",
        imageUrl: orderXlImg,
      },
      {
        name: "Surebird",
        link: "https://www.surebird.nl/",
        imageUrl: surebirdImg,
      },
      {
        name: "Tibo Energy",
        link: "https://tibo.energy/",
        imageUrl: tiboImg,
      },
    ],
  },
  {
    start: "2018",
    end: "2019",
    timeframe: "December 2019 - May 2021",
    company: "E-signature",
    position: "NodeJs Developer",
    location: "Kathmandu, Nepal",
    responsibilities: [
      `<p><a href="https://www.palmmind.com" class="underline" target="_blank" rel="noopener noreferrer">Website Design and Development Company in Nepal | E-Signature</a>.</p>`,
      "Worked on full stack web development, their codebase architecture, and database design, planning, and critical analysis.",
      "Implemented ETL to scrape data from different e-commerce and social platforms to develop analytical web applications.",
      "Conducted unit and API testing with Mocha and Chai, improving test coverage by 25%.",
    ],
    projects: [
      {
        name: "Sdoky",
        link: "https://www.sdoky.com/en",
        imageUrl: sdokyImg,
      },

      {
        name: "Narad Muni",
        link: "https://www.facebook.com/NaradMuniApp/",
        imageUrl: naradMuniImg,
      },
      {
        name: "Worker Pros",
        link: "/",
        imageUrl: blackp,
      },
      {
        name: "My Social View",
        link: "/",
        imageUrl: blackp,
      },
    ],
  },
  {
    start: "2018",
    end: "2019",
    timeframe: "October 2018 - July 2019",
    company: "Palmmind IT Consultancy",
    position: "Software Trainee",
    location: "Kathmandu, Nepal",
    responsibilities: [
      `<p><a href="https://www.palmmind.com" class="underline" target="_blank" rel="noopener noreferrer">Palmmind - Palm Mind Technology</a>.</p>`,
      "Built web applications using MEAN stack under the guidance of project leads.",
      "Developed chatbots for Banking and Commercial sectors using Dialogflow.",
      "Assisted in debugging and troubleshooting issues related to HTML, CSS, JavaScript, and Loopback frameworks.",
    ],
    projects: [
      {
        name: "Chatbots",
        link: "https://www.laxmisunrise.com/",
        imageUrl: laxmiBotImg,
      },
      {
        name: "CMS",
        link: "",
        imageUrl: blackp,
      },
    ],
  },
];

export const SoftSkills = [
  "Adept at evaluating situations objectively and making sound decision making based on thorough critical analysis.",
  "Dedicated to nurturing an environment of open and transparent communication, facilitating mutual understanding, and accompanying objectives through concise and impactful interactions.",
  "Ability to rapidly acquire new knowledge and skills, adapt to field dynamics, and mitigating potential escalations through proactive skill development and industry trends.",
  "Proficient in meticulously optimizing workflow efficiency, adeptly prioritizing tasks, and consistently meeting deadlines while upholding the highest standards of work quality.",
];

export const projects = [
  {
    name: "Personal Portfolio",
    link: "http://thapaashish.com.np/",
    imageUrl: personalProtfolio,
    github: "https://github.com/aacict/aacict",
    detail:
      "My personal portfolio website built with React, TypeScript, Tailwind CSS and hosted on Netlify. Also includes application of react router, react query, and particle.js.",
  },
  {
    name: "AI & ML Projects",
    link: "https://github.com/aacict/AI-Machine-Learning",
    imageUrl: ai,
    github: "https://github.com/aacict/AI-Machine-Learning",
    detail:
      "Data science, Machine learning, and AI projects covering topics such as reinforcement learning, NLP, classification, regression, computer vision, and Neural Networks.",
  },
  {
    name: "Crime Data Analysis",
    link: `${import.meta.env.VITE_APP_URL}/crime-analytics`,
    imageUrl: blackp,
    github: "https://github.com/swekriti12/Crime-Statistics",
    detail:
      "Big Data project analyzing crime data in the canada using Powerbi and Advance Python. The project involved data cleaning, transformation, and visualization to identify crime trends and patterns.",
  },
  {
    name: "Scapper Modules",
    link: "https://github.com/aacict/scrapper-modules",
    imageUrl: blackp,
    github: "https://github.com/aacict/scrapper-modules",
    detail:
      "Collection of web scrapers for extracting data from Facebook, Instagram, and restaurant review platforms like Quandoo, The Fork, and OpenTable. Built with Apify, Cheerio, and Axios for seamless data retrieval.",
  },
  {
    name: "News Sentiment Analysis",
    link: `${import.meta.env.VITE_APP_URL}/news-sentiment-analysis`,
    imageUrl: sentiment,
    github: "https://github.com/aacict/news_sentiment_analysis",
    detail:
      "Sentiment analysis tool for news articles, leveraging pre-trainned model from hugging face. Ideal for trend analysis and media monitoring",
  },
  {
    name: "Stock Data Analytics",
    link: "https://stock-data-analytics-dy9sxvvbtwwstlffhzcaf6.streamlit.app/",
    imageUrl: stockApp,
    github: "https://github.com/swekriti12/Stock-Data-Analytics",
    detail:
      "Stock data analysis and visualization tool built with Streamlit, Plotly, and Pandas. The tool provides insights into stock trend, stock performance, market trends, related news and their sentiment analysis.",
  },
  {
    name: "Object Detection",
    link: `${import.meta.env.VITE_APP_URL}/object-detection`,
    imageUrl: objectDet,
    github: "https://github.com/aacict/news_sentiment_analysis",
    detail: "Object Detection implementation from scratch using yolo",
  },
];

export const ExpertiseContent = {
  "Languages & Frameworks": [
    { name: "JavaScript", icon: faJs },
    { name: "TypeScript", icon: faCode },
    { name: "Python", icon: faPython },
    { name: "SQL", icon: faDatabase },
    { name: "Node.js", icon: faNodeJs },
    { name: "NestJS", icon: faFeatherAlt },
    { name: "Express.js", icon: faServer },
    { name: "React", icon: faReact },
    { name: "Mocha", icon: faMugHot },
    { name: "Chai", icon: faMugHot },
  ],
  Databases: [
    { name: "MySQL", icon: faDatabase },
    { name: "Postgres", icon: faDatabase },
    { name: "MongoDB", icon: faLeaf }, // Not in FA, may need custom
    { name: "Redis", icon: faServer },
  ],
  "Cloud Platforms": [
    { name: "AWS", icon: faAws },
    { name: "Azure", icon: faMicrosoft },
    { name: "Heroku", icon: faHSquare },
  ],
  "DevOps & Tools": [
    { name: "Git", icon: faGit },
    { name: "Docker", icon: faDocker },
    { name: "Postman", icon: faPaperPlane },
    { name: "Swagger", icon: faCode },
    { name: "Jira", icon: faJira },
    { name: "Bitbucket", icon: faBitbucket },
    { name: "GitLab", icon: faGitlab },
    { name: "PowerBI", icon: faChartColumn },
    { name: "Tableau", icon: faChartPie },
  ],
  "Data Science": [
    { name: "Hugging Face", icon: faSmile }, // closest match
    { name: "TensorFlow", icon: faNetworkWired },
    { name: "Scikit-learn", icon: faComputer },
    { name: "Spark", icon: faBolt },
  ],
  Core: [
    { name: "OOP", icon: faCubes },
    { name: "Data Structures & Algorithms", icon: faProjectDiagram },
    { name: "Cloud Computing", icon: faCloud },
    { name: "AI Infrastructure & Architecture", icon: faCube },
  ],
};

export const SocialLinks = [
  {
    href: "https://www.facebook.com/aacict",
    icon: faFacebook,
    style: { color: "#74C0FC" },
  },
  { href: "https://github.com/aacict/", icon: faGithub },
  {
    href: "https://www.linkedin.com/in/aacict/",
    icon: faLinkedin,
    style: { color: "#74C0FC" },
  },
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
  detectRetina: true,
};

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
  detectRetina: true,
};

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
  detectRetina: true,
};
