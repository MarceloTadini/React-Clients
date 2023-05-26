import React from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import  ReactDOM  from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Users from "./pages/Users";
import './index.css'
import Login from "./pages/Login";

const theme = createTheme({
    palette: {
      primary: {
        main: '#212121',
      },
      secondary:{
        main: '#6d60e0'
      }
    },
  });

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/users",
        element: <Users/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
])

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)