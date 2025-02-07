import React from 'react';
import { SoftSkills } from '../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const AboutStrength: React.FC = () => {
    return (
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 text-gold">Professional Strengths</h2>
            <div className="list-none list-inside space-y-2">
                {SoftSkills.map((point, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                        {point}</li>
                ))}
            </div>
        </div>
    );
};

export default AboutStrength;