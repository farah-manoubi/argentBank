import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home"
import { Layout } from "../components/layout/Layout";
import { SignIn } from "../pages/signIn/SignIn";

export const Router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/SignIn",
                element: <SignIn />
            }

        ]
    }
    
])
