import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main';
import ErrorPage from '../components/shared/ErrorPage';
import Home from '../components/pages/Home/Home';
import LogIn from '../components/pages/Authontication/LogIn';
import Register from '../components/pages/Authontication/Register';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [

       {

        path : "/",
        element : <Home></Home>
       },


       {

        path : "/logIn",
        element : <LogIn></LogIn>
       },

       {

        path : "/register",
        element : <Register></Register>
       }
      ]
    },


    {

        path : "*",
        element : <ErrorPage></ErrorPage>
    }
  ]);