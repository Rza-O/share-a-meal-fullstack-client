import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google Login context
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Email password registration
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
    
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        handleGoogleLogin,
        handleRegister,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;