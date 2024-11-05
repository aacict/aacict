import NavDots from "./common/NavDots"
import PageName from "./common/PageName"

function Portfolio() {
  return (
    <section className="section-conatiner flex" id="portfolio">
      <PageName name="Portfolio" />
      <NavDots currentPage="Portfolio" />
    </section>
  )
}

export default Portfolio
