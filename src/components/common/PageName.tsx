
function PageName({ name }) {
    return (
        <div className="flex items-center h-screen justify-center bg-cover bg-center">
            <div className="flex flex-col items-center">
                <span className="border-l border-white h-20 mb-2 transform rotate-45"></span>
                <p className="text-white font-bold text-lg tracking-widest transform -rotate-90">{name}</p>
                <span className="border-l border-white h-20 mt-2 transform rotate-45" ></span>
            </div>
        </div >
    )
}

export default PageName