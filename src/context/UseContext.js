import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import app from '../FireBase/Hooks/Firebase.config';

export const ContextAuth = createContext();
const auth = getAuth(app)

const UseContext = ({ children }) => {
    const [users, setUsers] = useState({});
    const [loding, setLoding] = useState(true);

    const createSingup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailverification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('check email')
            })
        return
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const ResetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    const googlelogin = (provider) => {
    return signInWithPopup(auth,provider)
}

    const githublogin = (gitprovider) => {
        return signInWithPopup(auth,gitprovider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cureentUser => {
            setUsers(cureentUser);
            setLoding(false)
            console.log(cureentUser)
        })
        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = { createSingup, emailverification, singIn,users,loding,ResetPassword,googlelogin,githublogin }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default UseContext;