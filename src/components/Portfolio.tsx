import { Link } from "react-router-dom"
import { projects } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import ProjectCard from "./common/projectCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlask } from "@fortawesome/free-solid-svg-icons"

function Portfolio() {
  return (
    <section className="section-conatiner flex" id="portfolio">
      <PageName name="Portfolio" />
      <div className="container portfolio-container m-auto px-24">
        <div className="flex flex-wrap project-card">
          {projects.map((project, index) => {
            return <ProjectCard key={index} imageSrc={project.imageUrl} title={project.name} link={project.link} github={project.github} detail={project.detail} />
          })}
        </div>
        <div className="flex justify-end py-4">
          <Link to={{ pathname: "/experience" }}>
            <button className="dropping-btn flex items-center justify-center px-4 py-2 text-white text-xl bg-transparent border-2 border-white rounded-full hover:bg-black transition">
              <FontAwesomeIcon icon={faFlask} />
            </button>
          </Link>
        </div>
      </div>
      <NavDots currentPage="Portfolio" />
    </section >
  )
}

export default Portfolio
