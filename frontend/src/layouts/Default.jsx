import { Outlet } from "react-router-dom"
import { Navbar } from "../components/layouts/Navbar"

export function Default() {

    return (
        <>
            <div className="content-wrapper">
                <Navbar />
                <Outlet />
            </div>
            {/* <h1>Default Layout</h1> */}
        </>
    )
}