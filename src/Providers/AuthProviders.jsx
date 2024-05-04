import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // update user
    const updateUser = (name, photoUrl ) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        });
    };



    // signIn user
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };
    // github login
    const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

// sign out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // onauthstatechange
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser=> {
        setUser(currentUser);
        setLoading(false)
      })
    
      return () => {
        unSubscribe()

      }
    }, [])
    

    const userInfo = {
        user,
        updateUser,
        createUser,
        loading,
        logIn,
        logOut,
        googleLogin,
        githubLogin,
    }
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
    
};


AuthProviders.propTypes = {
    children: PropTypes.node,
}
export default AuthProviders;