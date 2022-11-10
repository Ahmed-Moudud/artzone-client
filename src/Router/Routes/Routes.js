import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddReview from "../../Pages/Review/AddReview";
import Reviews from "../../Pages/Review/Reviews";
import AddServices from "../../Pages/Services/AddServices";
import AllServices from "../../Pages/Services/AllServices";
import ServiceDetail from "../../Pages/Services/ServiceDetail";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/allservices/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/allservices/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/addreviews',
                element: <AddReview></AddReview>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            }
           
        ]
    }
])

export default router;