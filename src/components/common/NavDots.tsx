import { Link } from "react-router-dom";

const NavDots = () => {
    return (
        <div className="flex items-center h-screen justify-center bg-cover bg-center">
            <div className="flex flex-col items-center space-y-3">
                <Link to='/' className="w-2 h-2 bg-gray-400 rounded-full" />
                <Link to='/' className="w-2 h-2 bg-gray-400 rounded-full" />
                <Link to='/' className="w-2 h-2 bg-gray-400 rounded-full" />
                <Link to='/' className="w-2 h-2 bg-white rounded-full" />
                <Link to='/' className="w-2 h-2 bg-gray-400 rounded-full" />
            </div>
        </div>
    );
};

export default NavDots