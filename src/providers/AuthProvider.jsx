import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUpdate = async (updateUser = {}) => {
    setLoading(true);
    await updateProfile(auth.currentUser, updateUser);
    setUser((preUser) => ({ ...preUser, ...updateUser }));
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const changePassword = (newPassword) => {
    const user = auth.currentUser;

    return updatePassword(user, newPassword);
  };
  const resetPassword = (userEmail) => {
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    () => {
      unsubscribe();
    };
  }, []);

  const cartHooks = () => {
    if (typeof window !== "undefined") {
      const getItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(getItems);
    }
  };
  const cartDelateHook = () => {
    if (typeof window !== "undefined") {
      const getItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(getItems);
    }
  };

  const value = {
    user,
    loading,
    createUser,
    signIn,
    profileUpdate,
    googleLogin,
    logout,
    changePassword,
    cartHooks,
    cartItems,
    cartDelateHook,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
