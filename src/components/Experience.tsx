import { Experiences } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"

function Experience() {
    return (
        <section className="section-conatiner flex" id="Experience">
            <PageName name="Experience" />
            <div className="container all-section-container m-auto px-24 justify-around" >
                <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
                <div className="space-y-8">
                    <div className="absolute left-30 w-px h-1/2 bg-gray-400"></div>
                    {Experiences.map((item, index) => (
                        <div key={index} className="relative pl-8">
                            <div className="absolute left-0 top-1.5 w-3 h-3 bg-white rounded-full"></div>
                            <h3 className="text-lg font-semibold text-white">{item.company}</h3>
                            <p className="text-gray-300">{item.position}</p>
                            <p className="text-gray-400">{item.location}</p>
                        </div>
                    ))}
                </div>
            </div>

            <NavDots currentPage="Experience" />
        </section>
    )
}

export default Experience
