import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Designation, FirstName, LastName, PersonalStatement, SocialLinks } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import { ReactTyped } from "react-typed";

function Intro() {
  return (
    <section className="section-conatiner flex" id="intro">
      <PageName name="Intro" />
      <div className="container all-section-container m-auto px-24 z-10">
        <div id="typed-strings">
          <ReactTyped
            className="text-5xl h-16"
            strings={[
              `I'm ${FirstName} ${LastName}`,
              `I'm a ${Designation}`,
            ]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1500}
            loop
          />
        </div>
        <div className="py-4 text-justify">
          {PersonalStatement}
        </div>
        <div className="social-icons py-4 px-2">
          {SocialLinks.map(({ href, icon, style }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1"
            >
              <FontAwesomeIcon icon={icon} beat style={style} />
            </a>
          ))}
        </div>
      </div>
      <NavDots currentPage="Intro" />
    </section>
  )
}

export default Intro
