import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import PropTypes from "prop-types";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    (localStorage.setItem("theme", theme),
      document.documentElement.setAttribute("data-theme", theme));
  });

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (name, image) => {
    setLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      const userEmail = currentUser?.email || user?.email;

      const loggedUser = { email: userEmail };

      if (currentUser) {
        axios.post(
          "https://my-assignment-11-server-bice.vercel.app/jwt",
          loggedUser,
          {
            withCredentials: true,
          },
        );
      } else {
        axios.post(
          "https://my-assignment-11-server-bice.vercel.app/logout",
          loggedUser,
          {
            withCredentials: true,
          },
        );
      }
    });
    return () => unSubcribe();
  });

  const userInfo = {
    user,
    createUser,
    updateUserInfo,
    loginUser,
    logout,
    googleLogin,
    loading,
    theme, 
    setTheme
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
