import React from 'react';
interface ExperienceModalProps {
    isOpen: boolean;
    toggleModal: (resp: Array<string>, proj: Array<object>) => void;
    responsibilties: Array<string>;
    projects: Array<object>;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ isOpen, toggleModal, responsibilties, projects }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="modal-content">
                <div className="experience-details flex items-center justify-center">
                    <div className="bg-white rounded p-6 w-1/2 text-gray-600">
                        <div className='flex justify-end'>
                            <button className="close-button" onClick={() => toggleModal([], [])}>
                                &times;
                            </button>
                        </div>
                        <h2 className="text-xl font-bold">Experience Details</h2>
                        <ol className="">{responsibilties.map((resp, key) => {
                            return <li key={key} dangerouslySetInnerHTML={{ __html: resp }} />
                        })}</ol>
                        <p>{JSON.stringify(projects)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceModal;