import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../../context/UseContext';

const Login = () => {
    const [validation2, setValidation2] = useState('');
    const [sucsess, setSucsess] = useState(false);
    const [email, setRestmail] = useState('');
    const { singIn, ResetPassword } = useContext(ContextAuth);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handlelogin = (e) => {
        e.preventDefault();
        setSucsess(false);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setValidation2('pls enter min 8 ')
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setValidation2('enter email')
            return;
        }

        singIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setRestmail(user)
                setValidation2('');
                form.reset();
                navigate(from, { replace: true });
                setSucsess(true);

            }).catch((error) => setValidation2(error.message))

    }

    const emailreset = (e) => {
        const email = e.target.value;
        setRestmail(email)
        console.log(email)
    }

    const handlereset = () => {
        ResetPassword(email)
            .then(() => {
                alert(' Password reset email sent!')

            }).catch((error) => setValidation2(error.message))
    }

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>

                <Form onSubmit={handlelogin} className='w-50'>
                    <div className='mb-3 text-center '>
                        <p className='bg-black p-3  fs-1 shadow-lg rounded  text-white'>{validation2}</p>
                        <p className='bg-black p-3  fs-1 shadow-lg rounded  text-white'>{sucsess && <>sucsess</>}</p>

                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={emailreset} name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" required />
                        <Link onClick={handlereset}>forget password</Link>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <p>you dosn't have in account fst ? <Link to='/Registation'>Registation</Link></p>

                </Form>

            </div>
        </div>
    );
};

export default Login;