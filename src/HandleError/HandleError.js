import React from 'react';
import { Link } from 'react-router-dom';

const HandleError = () => {
    return (
        <div className='flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100'>
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HandleError;