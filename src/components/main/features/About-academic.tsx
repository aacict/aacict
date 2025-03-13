import React from 'react';
import { Education } from '../../../utils/constant';
import { GraduationCap } from 'lucide-react';

const AboutAcademic: React.FC = () => {
    return (
        <div className="w-4/5 bg-white bg-opacity-10 backdrop-blur-md p-6 text-white">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gold">Academic Achievements</h2>
                <ul className="space-y-2">
                    {Education.map((edu, index) => (
                        <li key={index} className="flex flex-col gap-1">
                            <div className="flex items-start gap-2">
                                <GraduationCap className="w-5 h-5 mt-1" />
                                <p className="font-semibold">{edu.level}</p>
                            </div>
                            <p>{edu.institution}</p>
                            <p className="text-sm text-gray-400">{edu.location}</p>
                            <p className="text-sm text-gray-400">{edu.completedYear}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutAcademic;