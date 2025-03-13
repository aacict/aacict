import { Outlet } from 'react-router-dom';

const ProjectLayout = () => {
    return (
        <div className="personal-project-container">
            <Outlet />
        </div>
    );
};

export default ProjectLayout;