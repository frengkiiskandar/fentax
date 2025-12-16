import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import About from "../pages/About";
import Services from "../pages/Services";
import Tax from "../components/UI/Tax";
import Contact from "../pages/Contact";
import { lazy } from "react";
import WhyUs from "../pages/WhyUs";

// lazy component untuk di render dengan loading ketika data belum siap
const FinancialPlannig = lazy(()=> import('../components/UI/FinancialPlannig'))
const ProjectFinance = lazy(()=> import('../components/UI/ProjectFinance'))
const RiskManagement = lazy(()=> import('../components/UI/RiskManagement'))

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
                        path:'riskManagement', element:<RiskManagement />
                    },
                    {
                        path:'tax', element:<Tax />
                    }
                ]
            },
            {
                path:'contact', element:<Contact />
            },
            {
                path:'whyus', element:<WhyUs />
            },
        ]
    }
])

export default router;