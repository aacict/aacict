import NavDots from "./common/NavDots"
import PageName from "./common/PageName"

function Academic() {
  return (
    <section className="section-conatiner flex" id="academic">
      <PageName name="Academic" />
      <NavDots currentPage="Academic" />
    </section>
  )
}

export default Academic
