import { Outlet } from "react-router-dom"
import Nav from "../main/common/Nav"

const PortfolioLayout = () => {
    return (
        < >
            <Nav />
            <Outlet />
        </>
    )
}

export default PortfolioLayout
