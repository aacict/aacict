interface ProjectCardProps {
    imageSrc: string;
    title: string;
    link: string;
}

const ProjectCard = ({ imageSrc, title, link }: ProjectCardProps) => {
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
                    <a
                        href={link}
                        target="new"
                        className="px-4 py-2 bg-orange-500 rounded-full text-black font-semibold hover:bg-orange-600 transition"
                    >
                        View More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
