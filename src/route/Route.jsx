import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import About from "../pages/About";
import Services from "../pages/Services";
import Tax from "../components/UI/Tax";
import Contact from "../pages/Contact";
import { lazy } from "react";
import WhyUs from "../pages/WhyUs";
import Services2 from "../pages/Services2";
import KonsultasiPerpajakan from "../components/UI/KonsultasiPerpajakan";

// // lazy component untuk di render dengan loading ketika data belum siap
// const FinancialPlannig = lazy(()=> import('../components/UI/FinancialPlannig'))
// const ProjectFinance = lazy(()=> import('../components/UI/ProjectFinance'))
// const RiskManagement = lazy(()=> import('../components/UI/RiskManagement'))

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
                path:'services', element:<Services2 />,
            },
            {
                path:'services/konsultasiperpajakan', element:<KonsultasiPerpajakan />
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