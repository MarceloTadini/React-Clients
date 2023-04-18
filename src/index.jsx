import React from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import  ReactDOM  from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Users from "./pages/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/users",
        element: <Users/>,
    }
])

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
)