import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import About from "../pages/About";
import Services from "../pages/Services";
import FinancialPlannig from "../components/UI/FinancialPlannig";
import ProjectFinance from "../components/UI/ProjectFinance";
import Riskmanagement from "../components/UI/RiskManagement";
import Tax from "../components/UI/Tax";
import Contact from "../pages/Contact";

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
            },
            {
                path:'services', element:<Services />,
                children:[
                    {
                        index:true, element:<FinancialPlannig />
                    },
                    {
                        path:'projectFinance', element:<ProjectFinance />
                    },
                    {
                        path:'riskManagement', element:<Riskmanagement />
                    },
                    {
                        path:'tax', element:<Tax />
                    },
                ]
            },
            {
                path:'contact', element:<Contact />
            },
        ]
    }
])

export default router;