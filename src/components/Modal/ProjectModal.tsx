import React from 'react';

interface ProjectModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    // description: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, toggleModal }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="modal-content">
                <div className="experience-details flex items-center justify-center">
                    <div className="bg-white rounded p-6 w-9/12 text-gray-600">
                        <div className='flex justify-end'>
                            <button className="" onClick={() => toggleModal()}>
                                &times;
                            </button>
                        </div>
                        <ol className="">
                            <li>
                                <span>"adsd"</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;