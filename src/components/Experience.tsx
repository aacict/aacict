import { useState } from "react"
import { Experiences } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import ExperienceModal from "./Modal/ExperienceModal"
import { useSelector } from "react-redux"

interface Project {
    name: string;
    imageUrl: string;
    link: string;
}

function Experience() {
    const [isOpen, setIsOpen] = useState(false)
    const [responsibilities, setResponsibilities] = useState(Array<string>())
    const [companyName, SetCompanyName] = useState(String)
    const [projects, setProjects] = useState(Array<Project>())
    const isSidebarOpen = useSelector((state: { sidebarReducer: { isOpen: boolean } }) => state.sidebarReducer.isOpen)


    const toggleModal = (resp: Array<string>, proj: Array<Project>, companyName: string) => {
        setIsOpen(!isOpen);
        setResponsibilities(resp);
        SetCompanyName(companyName);
        setProjects(proj);
    }
    return (
        <section className={`${isSidebarOpen ? "w-10/12" : "w-full"} section-conatiner flex`} id="Experience">
            <PageName name="Experience" />
            <div className="container all-section-container m-auto px-24" >
                <div className="flex flex-wrap">
                    {Experiences.map((exp, index) => (
                        <div className="p-4" key={index}>
                            <div
                                className=" h-64 w-72 p-6 shadow-lg text-center bg-gray-500 opacity-65 hover:opacity-100 "
                            >
                                <h3 className="font-semibold text-xl">{exp.company}</h3>
                                <p className="text-black-100 text-xs font-italic">{exp.timeframe}</p>
                                <p className="text-black-600 pt-4">{exp.position}</p>
                                <p className="text-black-500">{exp.location}</p>
                                <div className="relative top-16">
                                    <button
                                        onClick={() => toggleModal(exp.responsibilities, exp.projects, exp.company)}
                                        className="bg-green-500 text-gray"
                                    >
                                        View More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NavDots currentPage="Experience" />
            <ExperienceModal isOpen={isOpen} companyName={companyName} toggleModal={toggleModal} responsibilties={responsibilities} projects={projects} />
        </section>
    )
}

export default Experience
