import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { makeid, postUserData } from '../logic/logic';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    const userId = makeid(8);
    window.localStorage.setItem("userId", userId);
    const payload = {
      userId,
      email,
    }
    console.log('Post request', payload);
    postUserData(payload);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
    return auth.signOut();
  }

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email) => {
    return currentUser.updateEmail(email)
  }

  const updatePassword = (password) => {
    return currentUser.updatePassword(password)
  }

  const updateDisplayName = (displayName) => {
    return currentUser.updateProfile({
      displayName
    }).then(() => {
      // Update successful
      console.log('Success');
    }).catch((error) => {
      // An error occurred
      console.log('Error: ', error);
    }); 
  }

  const updatePhotoURL = (photoURL) => {
    return currentUser.updatePhotoURL(photoURL);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    updateDisplayName,
    updatePhotoURL

  };

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
