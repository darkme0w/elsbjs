import { createBrowserRouter } from "react-router-dom";
import SetupPage from "../pages/setup";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <SetupPage/>
            }
        ]
    }
])

export default router;