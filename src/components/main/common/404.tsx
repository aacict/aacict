import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <h1 className="text-6xl font-extrabold text-red-500">404</h1>
            <p className="text-2xl text-gray-700 mt-4">Oops! Page Not Found</p>
            <p className="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all"
            >
                Go Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
