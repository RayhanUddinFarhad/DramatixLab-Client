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
import Instructors from '../components/pages/Instructors/Instructors';
import AllLabClasses from '../components/pages/LabClasses/AllLabClasses';
import Dashboard from '../components/pages/Dashboard/Dashboard';
import MyBooking from '../components/pages/Dashboard/UserDashboard/MyBooking';
import ManageUsers from '../components/pages/Dashboard/Admindashboard/ManageUsers';
import AddClass from '../components/pages/Dashboard/InstructorDashboard/AddClass';
import ManageClass from '../components/pages/Dashboard/Admindashboard/ManageClass';
import InstructorMyClass from '../components/pages/Dashboard/InstructorDashboard/InstructorMyClass';

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
       }, 
       {

        path : "/instructor",
        element : <Instructors></Instructors>
       },

       {
        path : "/classes",
        element : <AllLabClasses></AllLabClasses>
       },

       {
        path : "/dashboard",
        element : <Dashboard></Dashboard>,

        children : [

          {
            path  : 'myClass',
            element : <MyBooking></MyBooking>
          },

          {

            path : 'manageUsers',
            element : <ManageUsers></ManageUsers>
          }, 

          {
            path : 'addClass',
            element : <AddClass></AddClass>

          },

          {

            path : 'manageClasses',
            element : <ManageClass></ManageClass>
          },
          {
            path : 'instructorClass',
            element : <InstructorMyClass></InstructorMyClass>
          }
        ]
       }

       


      ]
    },


    {

        path : "*",
        element : <ErrorPage></ErrorPage>
    }
  ]);