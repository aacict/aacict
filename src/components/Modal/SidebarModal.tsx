import { Link } from "react-router-dom"
import { MainMenuListItem, SidebarParticleOption } from "../../utils/constant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Particle from "../common/particle"

function SidebarModal({ isOpen, toggleBar }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-96 text-black text-white transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full hidden"}`}>
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Particle options={SidebarParticleOption} />
      </div>
      <div  >
        <FontAwesomeIcon className="relative cursor-pointer z-20" style={{ padding: "14px 14px 14px 90%" }} icon={faXmark} onClick={toggleBar} size="2x" />
        <nav className="pt-8 pb-[14px] z-30" id="menu">
          <ul id="mainMenu" className="p-12">
            {MainMenuListItem.map((item, index) => {
              const url = `/${item.toLocaleLowerCase()}`
              return <li className="block hover:text-[#181818] .text-base font-semibold m-5" key={index}> <Link to={url}>{item}</Link> </li>
            })}
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default SidebarModal
