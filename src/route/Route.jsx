import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element : <Layout />,
        children: [
            {
                index:true, element: <Homepage />
            },
            {
                path:'about', element:<About />
            }
        ]
    }
])

export default router;