import NavDots from "./common/NavDots"
import PageName from "./common/PageName"

function About() {
  return (
    <section className="section-conatiner flex" id="about">
      <PageName name="About" />
      <div
        className="w-full z-20 h-64 bg-repeat bg-[url('../assets/images/dots.png')]"
      >
        asdf
      </div>
      <NavDots currentPage="About" />
    </section>
  )
}

export default About
