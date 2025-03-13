import { useSelector } from "react-redux"
import { Education } from "../../utils/constant"
import NavDots from "../common/NavDots"
import PageName from "../common/PageName"

function Academic() {
  const isSidebarOpen = useSelector((state: { sidebarReducer: { isOpen: boolean } }) => state.sidebarReducer.isOpen)
  return (
    <section className={`${isSidebarOpen ? "w-10/12" : "w-full"} section-conatiner flex`} id="academic">
      <PageName name="Academic" />
      <div className="container skills-container m-auto px-24" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
            <div className="space-y-8">
              <div className="absolute left-30 w-px h-1/2 bg-gray-400"></div>
              {Education.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute left-1.5 w-px h-full bg-gray-400"></div>
                  <h3 className="text-lg font-semibold text-white">{item.level}</h3>
                  <p className="text-gray-300">{item.institution}</p>
                  <p className="text-gray-400">{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <NavDots currentPage="Academic" />
    </section>
  )
}

export default Academic
