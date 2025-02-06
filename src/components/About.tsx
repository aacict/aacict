import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SoftSkills } from "../utils/constant";

function About() {
  return (
    <section className="section-conatiner flex" id="about">
      <PageName name="About" />
      <div className="container all-section-container m-auto px-24" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center">
            <img
              src="src\assets\images\profile.jpg"
              alt="Profile"
              className="w-70 h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-gray-200">
            <h2 className="mb-4 font-bold">
              Let’s delve more into my strengths
            </h2>
            <div className="list-none list-inside space-y-2">
              {SoftSkills.map((point, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                  {point}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NavDots currentPage="About" />
    </section>
  )
}

export default About
