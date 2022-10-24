import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '*',
            element:<HandleError/>
        }
        
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;