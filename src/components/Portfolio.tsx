import { projects } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import ProjectCard from "./common/projectCard"

function Portfolio() {
  return (
    <section className="section-conatiner flex" id="portfolio">
      <PageName name="Portfolio" />
      <div className="container m-auto px-24">
        <div className="flex flex-wrap">
          {projects.map((project, index) => {
            return <ProjectCard key={index} imageSrc={project.imageUrl} title={project.name} link={project.link} />
          })}
        </div>
      </div>
      <NavDots currentPage="Portfolio" />
    </section>
  )
}

export default Portfolio
