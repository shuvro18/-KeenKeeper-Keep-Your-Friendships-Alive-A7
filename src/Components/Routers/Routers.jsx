import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../HomePage/HomePage";
import Timeline from "../Timeline/Timeline";
import State from "../State/State";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<HomePage></HomePage>
            },
            {
                path: "/timeline",
                element:<Timeline></Timeline>
            },
            {
                path:"/state",
                element:<State></State>
            }
        ]
    },
])