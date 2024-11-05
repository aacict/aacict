import { ExpertiseContent } from "../utils/constant";
import PageName from "./common/PageName";
function Expertise() {
  const { langFrames, databases, otherToolsTechnologies, relavantCoursework } = ExpertiseContent
  return (
    <section className="section-conatiner flex" id="expertise">
      <PageName name="Expertise" />
      <div className="container skills-container m-16" >
        <div className="skills-container-sub" style={{ "animation-delay": "0.1s" }}>
          <h2>Languages and Frameworks</h2>
          <p>{langFrames}</p>
        </div>
        <div className="skills-container-sub" style={{ "animation-delay": "0.7s" }}>
          <h2>Databases</h2>
          <p>{databases}</p>
        </div>
        <div className="skills-container-sub" style={{ "animation-delay": "1.4s" }}>
          <h2>Other Tools & Technologies</h2>
          <p>{otherToolsTechnologies}</p>
        </div>
        <div className="skills-container-sub" style={{ "animation-delay": "2.1s" }}>
          <h2>Relevant Coursework</h2>
          <p>{relavantCoursework}</p>
        </div>
      </div>
    </section>
  )
}

export default Expertise
