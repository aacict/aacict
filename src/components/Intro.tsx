import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Designation, FirstName, LastName, PersonalStatement } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

function Intro() {
  return (
    <section className="section-conatiner flex justify-around" id="intro">
      <PageName name="Intro" />
      <div className="container m-auto">
        <div className="" id="typed-strings">
          <h1>
            I'm <span>{FirstName} {LastName}</span>
          </h1>
          <h1>
            I'm a <span>{Designation}</span>
          </h1>
          <span id="typed"></span>
          <p>
            {PersonalStatement}
          </p>
        </div>
        <div className="social-icons">
          <a href="">
            <FontAwesomeIcon className="m-1" icon={faFacebook} beat style={{ color: "#74C0FC", }} />
          </a>
          <a href="">
            <FontAwesomeIcon className="m-1" icon={faGithub} beat />
          </a>
        </div>
      </div>
      <NavDots currentPage="Intro" />
    </section>
  )
}

export default Intro
