
interface PageNameProps {
    name: string;
}

function PageName({ name }: PageNameProps) {
    return (
        <div className="fixed left-8 flex items-center h-screen justify-center bg-cover bg-center">
            <div className="flex flex-col items-center">
                <span className="border-l border-white h-20 mb-2 transform rotate-45"></span>
                <p className="text-white font-medium text-sm tracking-widest transform -rotate-90">{name}</p>
                <span className="border-l border-white h-20 mt-2 transform rotate-45" ></span>
            </div>
        </div >
    )
}

export default PageName