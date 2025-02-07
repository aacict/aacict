import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import AboutAcademic from "./features/About-academic"
import AboutProfile from "./features/About-profile"
import AboutStrength from "./features/About-strength"

function About() {
  return (
    <section className="section-conatiner flex" id="about">
      <PageName name="About" />
      <div className="container all-section-container m-auto px-24" >
        <div className="flex justify-around space-x-4">
          <AboutProfile image="src\assets\images\profile.jpg" href="src\assets\Ashish_Thapa_Resume.pdf" />
          <AboutAcademic />
          <AboutStrength />
        </div>
      </div>
      <NavDots currentPage="About" />
    </section>
  )

}
export default About
