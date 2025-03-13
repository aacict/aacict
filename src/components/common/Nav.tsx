import { useDispatch } from "react-redux"
import SidebarModal from "../modal/SidebarModal"
import { toggleBar } from "../../redux/sidebarSlice"

const Nav = () => {
  const dispatch = useDispatch()

  return (
    <div className="fixed top-0 right-0 m-6 z-20">
      <a className="flex flex-col items-center cursor-pointer group" onClick={() => dispatch(toggleBar())}>
        <span className="block w-8 h-0.5 bg-gray-100 mb-1 transition-transform duration-300 group-hover:scale-x-50"></span>
        <span className="block w-8 h-0.5 bg-gray-100 mb-1 transition-transform duration-300"></span>
        <span className="block w-8 h-0.5 bg-gray-100 transition-transform duration-300 group-hover:scale-x-50"></span>
      </a>
      <SidebarModal />
    </div>
  )
}

export default Nav
