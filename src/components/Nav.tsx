import SidebarModal from "./Modal/SidebarModal"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="fixed top-0 right-0 m-6">
      <a className="flex flex-col items-center cursor-pointer group" onClick={toggleBar}>
        <span className="block w-8 h-0.5 bg-gray-100 mb-1 transition-transform duration-300 group-hover:scale-x-50"></span>
        <span className="block w-8 h-0.5 bg-gray-100 mb-1 transition-transform duration-300"></span>
        <span className="block w-8 h-0.5 bg-gray-100 transition-transform duration-300 group-hover:scale-x-50"></span>
      </a>
      <SidebarModal isOpen={isOpen} toggleBar={toggleBar} />
    </div>
  )
}

export default App
