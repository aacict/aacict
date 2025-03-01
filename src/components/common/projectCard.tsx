import React, { } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    link: string;
    github: string;
    detail?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, link, github }) => {
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="p-4">
            <div className="relative group w-60 h-40 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                    <h3 className="text-sm text-gray-300 font-semibold mb-4">{title}</h3>
                    <div className="flex space-x-2">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-600 transition mb-2 flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faGithub} />

                        </a>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full text-white font-semibold hover:bg-blue-600 transition mb-2 flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faLink} />

                        </a>
                    </div>
                    <button className="bg-green-500 text-gray" onClick={() => { }}>
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
