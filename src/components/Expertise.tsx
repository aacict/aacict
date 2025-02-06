import { ExpertiseContent } from "../utils/constant";
import NavDots from "./common/NavDots";
import PageName from "./common/PageName";
function Expertise() {
  const { langFrames, databases, otherToolsTechnologies, relavantCoursework } = ExpertiseContent
  return (
    <section className="section-conatiner flex" id="expertise">
      <PageName name="Expertise" />
      <div className="container skills-container m-auto px-24" >
        <div className="skills-container-sub" style={{ animationDelay: "0.1s" }}>
          <h2>Languages and Frameworks</h2>
          <p>{langFrames}</p>
        </div>
        <div className="skills-container-sub" style={{ animationDelay: "0.7s" }}>
          <h2>Databases</h2>
          <p>{databases}</p>
        </div>
        <div className="skills-container-sub" style={{ animationDelay: "1.4s" }}>
          <h2>Other Tools & Technologies</h2>
          <p>{otherToolsTechnologies}</p>
        </div>
        <div className="skills-container-sub" style={{ animationDelay: "2.1s" }}>
          <h2>Relevant Coursework</h2>
          <p>{relavantCoursework}</p>
        </div>
      </div>
      <NavDots currentPage="Expertise" />
    </section>
  )
}

export default Expertise
