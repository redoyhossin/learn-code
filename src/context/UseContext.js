import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
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
    const authInfo = { createSingup, emailverification, singIn }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default UseContext;