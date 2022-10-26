import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';
import Main from '../Layout/Main';
import About from '../pages/About/About';
import Blog from '../pages/blogs/Blog';
import CartDetails from '../pages/Courses/AllCart/Cart/CartDetails/CartDetails';
import Courses from '../pages/Courses/Courses';
import Faq from '../pages/FAQ/Faq';
import Login from '../pages/formLoginSingup/Login/Login';
import Registration from '../pages/formLoginSingup/registration/Registration';
import Home from '../pages/Home/Home';
import ProtectedRout from '../pages/ProtectedRout/ProtectedRout';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/About',
                    element: <About />
                },
                {
                    path: '/Courses',
                    element: <ProtectedRout><Courses />,</ProtectedRout>,
                    loader: () => fetch('http://localhost:5000/allproduct'),
                },

                {
                    path: '/Blog',
                    element: <Blog />
                },
                {
                    path: '/Faq',
                    element: <Faq />
                },
                {
                    path: 'Login',
                    element: <Login />
                },
                {
                    path: 'Registration',
                    element: <Registration />
                },
                {
                    path: '/Cart/:CartId',
                    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.CartId}`),
                    element: <CartDetails />,
                    
                }
              

            ]
        },
        {
            path: '*',
            element: <HandleError />
        }

    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;