import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface Project {
    name: string;
    imageUrl: string;
    link: string;
}

interface ExperienceModalProps {
    isOpen: boolean;
    toggleModal: (resp: Array<string>, proj: Array<Project>, companyName: string) => void;
    responsibilties: Array<string>;
    companyName: string;
    projects: Array<Project>;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, toggleModal, responsibilties, projects }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="modal-content">
                <div className="experience-details flex items-center justify-center">
                    <div className="bg-white rounded p-6 w-9/12 text-gray-600">
                        <div className='flex justify-end'>
                            <button className="close-button" onClick={() => toggleModal([], [], '')}>
                                &times;
                            </button>
                        </div>
                        <span className="text-xl font-bold" dangerouslySetInnerHTML={{ __html: responsibilties[0] }}></span>
                        <ol className="">{responsibilties.map((resp, key) => {
                            if (key === 0) return null;
                            return <li key={key}>
                                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                                <span>{resp}</span>
                            </li>
                        })}
                            <span className="text-xl font-bold">Involved Projects:::</span>
                            <div className="flex space-x-4">
                                {projects.map((project, index) => (
                                    <a
                                        key={index}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='group'
                                    >
                                        <img
                                            src={project.imageUrl}
                                            alt={project.name}
                                            className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-gray-500 transition duration-200"
                                        />
                                        <span className="relative bottom-20 transform opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-1 py-1 whitespace-nowrap transition-opacity duration-200">
                                            {project.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;