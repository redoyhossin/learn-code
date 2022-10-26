import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './AllCart/Cart/Cart';
import CartButton from './AllCart/CartButton/CartButton';

const Courses = () => {
    const productdata = useLoaderData()

    return (
        <div className='mt-10 mx-4 flex justify-center'>
            <div className='lg:flex justify-between'>
                <div className=''>
                    {
                        productdata.map(pd => <CartButton key={pd.id} pd={pd} />)
                    }
                </div>


                <div className=' lg:mx-4  lg:grid grid-cols-3 gap-4'>
                    {
                        productdata.map(pt => <Cart key={pt.id} pt={pt} />)
                    }
                </div>



            </div>
        </div>
    );
};

export default Courses;
