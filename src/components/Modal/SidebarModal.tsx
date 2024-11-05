import { Link } from "react-router-dom"
import { MainMenuListItem, SidebarParticleOption } from "../../utils/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Particle from "../common/particle"

function SidebarModal({ isOpen, toggleBar }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-96 transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full hidden"}`}>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Particle options={SidebarParticleOption} />
      </div>
      <div  >
        <FontAwesomeIcon className="relative cursor-pointer z-20 text-black" style={{ padding: "14px 14px 14px 90%" }} icon={faXmark} onClick={toggleBar} size="2x" />
        <nav className="pt-8 pb-[14px] z-30" id="menu">
          <ul id="mainMenu" className="pl-12 pt-8">
            {MainMenuListItem.map((item, index) => {
              const url = `/${item.toLocaleLowerCase()}`
              return <li className="block text-gray-800 font-semibold m-5 hover:text-black" key={index}> <Link to={url}>{item}</Link> </li>
            })}
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default SidebarModal
