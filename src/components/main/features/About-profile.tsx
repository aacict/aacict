import { ArrowDownToLine } from 'lucide-react';
import React from 'react';

interface AboutProfileProps {
    image: string;
    href: string;
}

const AboutProfile: React.FC<AboutProfileProps> = ({ href }) => {
    return (
        <div className="relative group">
            <div className="w-20 h-32 rounded-full shadow-lg object-cover "></div>
            {/* <img
                src={image}
                alt="Profile"
                className="w-32 h-32 inset-0 rounded-full shadow-lg object-cover "
            /> */}
            <a
                href={href}
                download
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-70 group-hover:opacity-100 transition-opacity rounded-full"
            >
                <ArrowDownToLine w-32 h-32 rounded-full shadow-lg object-cover />
            </a>
        </div>
    );
};

export default AboutProfile;