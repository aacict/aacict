import { useSelector } from "react-redux";
import { ExpertiseContent } from "../../utils/constant";
import NavDots from "./common/NavDots";
import PageName from "./common/PageName";
function Expertise() {
  const isSidebarOpen = useSelector((state: { sidebarReducer: { isOpen: boolean } }) => state.sidebarReducer.isOpen)

  return (
    <section className={`${isSidebarOpen ? "w-10/12" : "w-full"} section-conatiner flex`} id="expertise">
      <PageName name="Expertise" />
      <div className="container all-section-container skills-container m-auto px-24" >
        {Object.entries(ExpertiseContent).map(([key, value], index) => (
          <div
            key={key}
            className="skills-container-sub"
            style={{ animationDelay: `${index * 0.6}s` }}
          >
            <h2>{key}:</h2>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <NavDots currentPage="Expertise" />
    </section>
  )
}

export default Expertise
