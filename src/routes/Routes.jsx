

import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddNeedVolunteer from "../components/volunteer/AddNeedVolunteer";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AllNeedVolunteer from "../pages/allNeedVolunteer/AllNeedVolunteer";
import Details from "../pages/detail/Details";
import ManageMyPost from "../pages/manageMyPost/ManageMyPost";
import Update from "../pages/update/Update";
import BeVolunteer from "../pages/beVolunter/BeVolunteer";
import Category from "../pages/category/Category";
import ClintRequest from "../pages/clintRequest/ClintRequest";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allNeedVolunteer',
                // loader: () => fetch('/EstateData.json'),{credentials :'include'}
                element: <AllNeedVolunteer></AllNeedVolunteer>,
                loader: () => fetch(`http://localhost:5000/needVolunteer`)
            },
            {
                path: '/needVolunteer',
                element: <PrivateRoute><AddNeedVolunteer></AddNeedVolunteer></PrivateRoute>
            },
            {
                path: '/manageMyPost',
                element: <PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>
            },
            {
                path: '/clintRequest',
                element: <PrivateRoute><ClintRequest></ClintRequest></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,

            },
            {
                path: '/details/:id',
                // loader: () => fetch('/EstateData.json'),
                element: <PrivateRoute><Details></Details></PrivateRoute>

            },
            // {
            //     path: '/category/:subcategory',
            //     // loader: () => fetch('/EstateData.json'),
            //     element: <Category></Category>,

            // },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/beVolunteer/:id',
                element: <PrivateRoute><BeVolunteer></BeVolunteer></PrivateRoute>
            },
            {
                path: '/category/:subcategory',
                // loader: () => fetch('/EstateData.json'),
                element:<Category></Category>
                

            },
        ]
    },
]);

export default Routes;