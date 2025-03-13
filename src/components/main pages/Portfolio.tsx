import { Link } from "react-router-dom"
import { projects } from "../../utils/constant"
import NavDots from "../common/NavDots"
import PageName from "../common/PageName"
import ProjectCard from "../common/projectCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlask } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { Tooltip } from 'react-tooltip';


function Portfolio() {
  const isSidebarOpen = useSelector((state: { sidebarReducer: { isOpen: boolean } }) => state.sidebarReducer.isOpen)
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <section className={`${isSidebarOpen ? "w-10/12" : "w-full"} section-conatiner flex`} id="portfolio">
      <PageName name="Portfolio" />
      <div className="container portfolio-container m-auto px-24">
        <div className="flex flex-wrap project-card">
          {projects.map((project, index) => {
            return <ProjectCard key={index} imageSrc={project.imageUrl} title={project.name} link={project.link} github={project.github} detail={project.detail} />
          })}
          <div>
            <Tooltip id="project-tooltip" place="bottom" />
          </div>
        </div>
        <div className="flex justify-end py-4">
          <Link to={{ pathname: "/professional" }}>
            <button className="dropping-btn flex items-center justify-center px-4 py-2 text-white text-xl bg-transparent border-2 border-white rounded-full hover:bg-black transition">
              <FontAwesomeIcon icon={faFlask} />
            </button>
          </Link>
        </div>
      </div>
      <NavDots currentPage="Portfolio" />
      {/* <ProjectModal isOpen={isOpen} toggleModal={toggleModal} /> */}
    </section >
  )
}

export default Portfolio
