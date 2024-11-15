import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

const MailLayout = () => {
    return (
        <div>

            <Navbar />

            <div>
                <Outlet />

            </div>


        </div>
    )
}

export default MailLayout
