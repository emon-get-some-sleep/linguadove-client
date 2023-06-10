import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../components/Instructors/Instructors";
import Classes from "../components/Classes/Classes";
import Dashboard from "../shared/Dashboard/Dashboard";
import SelectedClass from "../components/SelectedClass/SelectedClass";
import EnrolledClasses from "../components/EnrolledClasses/EnrolledClasses";
import AddClass from "../components/AddClass/AddClass";
import MyClasses from "../components/MyClasses/MyClasses";
import ManageClasses from "../components/ManageClasses/ManageClasses";
import ManageUsers from "../components/ManageUsers/ManageUsers";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'selectedclass',
          element: <SelectedClass></SelectedClass>
        },
        {
          path: 'enrolledclasses',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'addaclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manageclasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);

export default router;