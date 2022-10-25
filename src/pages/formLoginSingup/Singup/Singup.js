import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../../../context/UseContext';

const Singup = () => {
    const [validation, setValidation] = useState('');
    const { createSingup } = useContext(ContextAuth);
    const { emailverification } = useContext(ContextAuth);
    const [sucsess, setSucsess] = useState(false);

    const handleSingup = (e) => {
        e.preventDefault();
        setSucsess(false)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        if (password.length < 6) {
            setValidation('pls enter min 8 ')
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setValidation('enter email')
            return;
        }
        if (name.length < 8) {
            setValidation('enter name min 8 ')
            return;
        }
        form.reset();
        createSingup(email, password)
            .then(result => {
                const user = result.user;
                setSucsess(true)
                setValidation('');
                emailverification();

            })
            .catch(error => setSucsess(error.message));

    }


    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>

                <form onSubmit={handleSingup} className='w-50'>
                    <div className='mb-3 text-center '>
                        <p className='bg-black p-3  fs-1 shadow-lg rounded  text-white'>{validation}</p>
                        <p className='bg-black p-3  fs-1 shadow-lg rounded  text-white'>{sucsess && <>sucsess</>}</p>

                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Entar your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Entar your email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Entar your email" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Entar your password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Entar your password" required />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registation
                    </Button>
                    <p>alrady have in account? <Link to='/Login'>Login</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Singup;