import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../HomePage/HomePage";
import Timeline from "../Timeline/Timeline";
import State from "../State/State";
import ErrorPage from "../ErrorPage/ErrorPage";
import ShowDetails from "../ShowDetails/ShowDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/state",
                element: <State></State>
            },
            {
                path:"/details/:id",
                loader:()=>fetch("/Data.json"),
                element:<ShowDetails></ShowDetails>
            }

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])