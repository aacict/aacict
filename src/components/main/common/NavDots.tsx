import { Link } from "react-router-dom";
import { MainMenuListItem } from "../../../utils/constant";

interface NavDotsProps {
    currentPage: string;
}

const NavDots = ({ currentPage }: NavDotsProps) => {
    return (
        <div className="fixed right-8 flex items-center h-screen justify-center bg-cover bg-center">
            <div className="flex flex-col items-center space-y-3">
                {MainMenuListItem.map((item, index) => {
                    const url = `/${item.toLocaleLowerCase()}`
                    const active = currentPage == item ? `w-3 h-3 bg-white rounded-full` : `w-3 h-3 bg-gray-400 rounded-full`
                    return <Link to={url} key={index} className={active} />
                })}
            </div>
        </div>
    );
};

export default NavDots