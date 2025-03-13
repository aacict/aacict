import { Outlet } from "react-router-dom"
import Nav from "../common/Nav"

const PortfolioLayout = () => {
    return (
        < >
            <Nav />
            <Outlet />
        </>
    )
}

export default PortfolioLayout
