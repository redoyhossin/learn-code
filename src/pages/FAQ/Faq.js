import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Faqcart from './Faqcart/Faqcart';

const Faq = () => {
    const question = useLoaderData()
    return (
        <div className='lg:mx-4  lg:grid grid-cols-3 gap-4  hover:shadow-2xl'>

            {
                question.map(qs => <Faqcart key={qs.id} qs={qs} />)
            }
        </div>
    );
};
export default Faq;