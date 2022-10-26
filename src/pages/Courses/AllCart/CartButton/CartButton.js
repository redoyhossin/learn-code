import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CartButton = ({ pd }) => {
    const { name, id } = pd;
    return (
        <div>
            <Link to={`/Cart/${id}`}>
                <Button className='px-6 mb-3' gradientMonochrome="info">
                    {name}
                </Button>
            </Link>
        </div>
    );
};

export default CartButton;