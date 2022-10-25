import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'

const Navbars = () => {
    return (
        <div>
            <div>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand >
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9 rounded-2xl"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Learn code
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@flowbite.com
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Dashboard
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>

                    <Navbar.Collapse>
                        <Link to='/' className='text-base font-semibold text-slate-700'> Home</Link>
                        <Link to='/About' className='text-base font-semibold text-slate-700'> About</Link>
                        <Link to='/Courses' className='text-base font-semibold text-slate-700'> Courses</Link>
                        <Link to='/Blog' className='text-base font-semibold text-slate-700'> Blog</Link>
                        <Link to='/Blog' className='text-base font-semibold text-slate-700'>FAQ</Link>

                        <label htmlFor="red-toggle" className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input type="checkbox" value="" id="red-toggle" className="sr-only peer" defaultChecked/>
                                <div className="w-11 h-6 bg-black rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-red-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">toggle theme</span>
                        </label>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navbars;