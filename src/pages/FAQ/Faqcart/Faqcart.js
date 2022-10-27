import React from 'react';

const Faqcart = ({ qs }) => {
    const { name, description, picture, money, id } = qs
    return (
        <div className='flex justify-center my-4'>

            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded p-8 rounded-t-lg" src={picture} alt="product image"/>
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ description}</h5>
                    </a>
                   
                   
                </div>
            </div>

        </div>
    );
};

export default Faqcart;