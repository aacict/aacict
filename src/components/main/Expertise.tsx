import { useSelector } from "react-redux";
import { ExpertiseContent } from "../../utils/constant";
import NavDots from "./common/NavDots";
import PageName from "./common/PageName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Expertise() {
  const isSidebarOpen = useSelector((state: { sidebarReducer: { isOpen: boolean } }) => state.sidebarReducer.isOpen)

  return (
    <section className={`${isSidebarOpen ? "w-10/12" : "w-full"} section-conatiner flex`} id="expertise">
      <PageName name="Expertise" />
      <div className="container all-section-container skills-container m-auto px-24" >
        {Object.entries(ExpertiseContent).map(([category, tools], index) => (
          <div
            key={category}
            className="skills-container-sub"
            style={{ animationDelay: `${index * 0.6}s` }}
          >
            <h2 className="text-xl font-semibold mb-2">{category}</h2>
            <ul className="flex flex-wrap gap-4">
              {tools.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-2 px-3 py-1 rounded-md shadow-sm">
                  <FontAwesomeIcon icon={icon} className="text-primary" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <NavDots currentPage="Expertise" />
    </section>
  )
}

export default Expertise
