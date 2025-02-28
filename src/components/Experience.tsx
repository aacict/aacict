import { useState } from "react"
import { Experiences } from "../utils/constant"
import NavDots from "./common/NavDots"
import PageName from "./common/PageName"
import ExperienceModal from "./Modal/ExperienceModal"

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

    const toggleModal = (resp: Array<string>, proj: Array<Project>, companyName: string) => {
        setIsOpen(!isOpen);
        setResponsibilities(resp);
        SetCompanyName(companyName);
        setProjects(proj);
    }
    return (
        <section className="section-conatiner flex" id="Experience">
            <PageName name="Experience" />
            <div className="container all-section-container m-auto px-24" >
                <div className="flex justify-around items-center space-x-4">
                    {Experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="shadow-lg p-6 flex-1 text-center bg-gray-500 opacity-65 hover:opacity-100 h-64"
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
                    ))}
                </div>
            </div>
            <NavDots currentPage="Experience" />
            <ExperienceModal isOpen={isOpen} companyName={companyName} toggleModal={toggleModal} responsibilties={responsibilities} projects={projects} />
        </section>
    )
}

export default Experience
