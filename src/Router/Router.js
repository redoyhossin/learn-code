import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';
import Main from '../Layout/Main';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: 'About',
                    element:<About/>
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