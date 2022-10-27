// import React from 'react';
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ContextAuth } from '../../../context/UseContext';


const Registration = () => {
    const [validation, setValidation] = useState('');
    const { createSingup } = useContext(ContextAuth);
    const { emailverification, auth } = useContext(ContextAuth);
    const [sucsess, setSucsess] = useState(false);

    const handleSingup = (e) => {
        e.preventDefault();
        setSucsess(false)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            toast.error('Enter valid password')
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setValidation('enter valid password')
            return;
        }
        if (name.length < 6) {
            setValidation(' enter minimum 6 character  ')
            return;
        }
        form.reset();
        createSingup(email, password)
            .then(result => {
                const user = result.user;


                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    toast.success('Update success')

                }).catch((error) => {
                    toast.error(error.message)
                });

                setSucsess(true)
                setValidation('');
                emailverification();

            })
            .catch(error => setSucsess(error.message));

    }

    return (
        <div>
            <div>
                <div className='w-96 m-auto'>
                    <div className='text-yellow-500 text-xl'>
                        {sucsess && <p> Registration successfuuly </p>}
                    </div>
                    <h1 className='text-center text-red-600'>{validation}</h1>


                    <form onSubmit={handleSingup}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
                            <input type="text" name='name' id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                            <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo URL</label>
                            <input type="url" name='photo' id="photo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Photo URL" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" name='password' id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Enter your password' required />
                        </div>

                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link className="text-blue-600 hover:underline dark:text-blue-500" >terms and conditions</Link></label>
                        </div>
                        <div className='mt-4 text-center'>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registration</button>
                        </div>
                        <div className='flex items-center justify-center py-4 text-center'>
                            <span className="text-sm text-gray-600 dark:text-gray-200">  Already have an account??</span>

                            <Link to='/Login' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default Registration;