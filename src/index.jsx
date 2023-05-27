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

import { AuthProvider } from "./state/auth";

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
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)