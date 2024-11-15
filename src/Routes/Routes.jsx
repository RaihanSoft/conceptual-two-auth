import {
    createBrowserRouter,
} from "react-router-dom";
import MailLayout from "../Mainlayout/MailLayout";
import About from "../Components/About";
import Home from "../Pages/Home";
import AllTeethment from "../Pages/AllTeethment";
import Appointment from "../Pages/Appointment";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MailLayout />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-teethment',
                element: <AllTeethment />
            },
            {
                path: '/appointment-profile',
                element: <Appointment />
            },            
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
    {
        path: '/about',
        element: <About />
    }
]);

export default router