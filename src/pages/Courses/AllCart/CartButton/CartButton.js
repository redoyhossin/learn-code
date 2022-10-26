import { Button } from 'flowbite-react';
import React from 'react';

const CartButton = ({ pd }) => {
    const { name } = pd;
    return (
        <div>
            <Button className='px-6 mb-3' gradientMonochrome="info">
                {name}
            </Button>
        </div>
    );
};

export default CartButton;