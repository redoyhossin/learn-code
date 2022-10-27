import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import app from '../FireBase/Hooks/Firebase.config';
import { toast } from 'react-toastify';

export const ContextAuth = createContext();
const auth = getAuth(app)

const UseContext = ({ children }) => {
    const [users, setUsers] = useState({});
    const [loding, setLoding] = useState(true);

    const createSingup = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailverification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast.info('check your email')

            })
        return
    }

    const singIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const ResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const googlelogin = (provider) => {
        setLoding(true);
        return signInWithPopup(auth, provider)
    }

    const githublogin = (gitprovider) => {
        setLoding(true);
        return signInWithPopup(auth, gitprovider)
    }
    const logout = () => {
        setLoding(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cureentUser => {
            setUsers(cureentUser);
            setLoding(false)
        })
        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { createSingup, emailverification, singIn, users, loding, ResetPassword, googlelogin, githublogin, logout,auth }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default UseContext;