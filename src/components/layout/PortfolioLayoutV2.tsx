import { Outlet } from 'react-router-dom';

const PortfolioLayoutV2 = () => {
    return (
        <div className="personal-portfolio-v2-container">
            <Outlet />
        </div>
    );
};

export default PortfolioLayoutV2;