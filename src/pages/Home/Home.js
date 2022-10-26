import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import header from '../../assets/img/header1.png'
import scaled from '../../assets/img/scaled.png'
import boy from '../../assets/img/boy.png'

const Home = () => {
    return (
        <div>
            <div className='my-16 '>
                <div className='lg:flex items-center  conteinar px-4'>
                    <div className='mb-7'>
                        <h1 className='text-4xl md:text-4xl lg:text-7xl  font-bold text-slate-500'>
                            <code className='shadow-2xl rounded bg-red-200'> Learn </code> Coding  With Professional Instructors
                        </h1>
                    </div>

                    <div className=''>
                        <h1 className='lg:text-xl font-semibold text-pink-900 mb-12'>
                            How to Learn Programming? How to Start Coding: The Ultimate Guide for Beginner Programmers
                        </h1>
                        <Button className='py-5 px-6 ' gradientDuoTone="purpleToBlue">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            <section className='mb-20 mx-6'>
                
                <div className="h-56 sm:h-64 lg:max-h-96 xl:h-80 2xl:h-96 lg:mx-32">
                    <Carousel slideInterval={5000}>
                        <img className='w-82'
                            src={header}
                            alt="..."
                        />
                        <img
                            src={scaled}
                            alt="..."
                        />
                        <img 
                            src={boy}
                            alt="..."
                        />
                       
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Home;