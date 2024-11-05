import { Link } from "react-router-dom";
import { MainMenuListItem } from "../../utils/constant";

const NavDots = ({ currentPage }) => {
    return (
        <div className="fixed right-8 flex items-center h-screen justify-center bg-cover bg-center">
            <div className="flex flex-col items-center space-y-3">
                {MainMenuListItem.map((item, index) => {
                    const url = `/${item.toLocaleLowerCase()}`
                    const active = currentPage == item ? `w-2 h-2 bg-white rounded-full` : `w-2 h-2 bg-gray-400 rounded-full`
                    return <Link to={url} key={index} className={active} />
                })}
            </div>
        </div>
    );
};

export default NavDots