import { createContext, useContext, useState, useRef, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, createUser, fetchEmails } from "./firebase";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
    emailNotifications: false,
    emailAccess: false,
    personalizedAds: false,
  });
  const [loginData, setLoginData] = useState({ signInEmail: "", signInPassword: "" });
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupPasswordConfirmationRef = useRef();
  const signupNextButton = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const loginNextButton = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirmation") {
      setPasswordConfirmation(value);
    } else if (name === "signInEmail") {
      setLoginData((prevState) => {
        return { ...prevState, [name]: value };
      });
    } else if (name === "signInPassword") {
      setLoginData((prevState) => {
        return { ...prevState, [name]: value };
      });
    } else {
      setFormData((prevState) => {
        return { ...prevState, [name]: type === "checkbox" ? checked : value };
      });
    }
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const upperCase = /(?=.*[A-Z])/;
    const lowerCase = /(?=.*[a-z])/;
    const number = /(?=.*?[0-9])/;
    const specialChar = /(?=.*?[!@#\$&*~\.])/;
    const length = /.{6,20}/;

    if (password !== passwordConfirmation) return setError("Passwords do not match");
    if (password.length < 6) return setError("Password should be at least 6 characters");
    if (password.match(upperCase) === null)
      return setError("Password should contain at least 1 upper case letter");
    if (password.match(lowerCase) === null)
      return setError("Password should contain at least 1 lower case letter");
    if (password.match(number) === null) return setError("Password should contain at least 1 number");
    if (password.match(specialChar) === null)
      return setError("Password should contain at least 1 special character");
    if (password.match(length) === null) return setError("Password should be between 6-20 characters");

    try {
      setError("");
      setLoading(true);
      const { name, email, day, month, year } = formData;
      await signUp(email, password);
      await createUser(name, email, day, month, year);
      localStorage.setItem("user", JSON.stringify([]));
      localStorage.setItem("image", JSON.stringify(currentUser.photoURL));
      await redirectUser("");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(loginData.signInEmail, loginData.signInPassword);
      localStorage.setItem("user", JSON.stringify([]));
      localStorage.setItem("image", JSON.stringify(currentUser.photoURL));
      await redirectUser("");
      setLoginData({ signInEmail: "", signInPassword: "" });
      setPage(1);
    } catch (error) {
      console.error(error);
      setError("Wrong password!");
      setInvalidBorderColor(loginPasswordRef);
    }

    setLoading(false);
  };

  const logout = () => {
    return signOut(auth);
  };

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      localStorage.removeItem("user");
      localStorage.removeItem("image");
      redirectUser("login");
    } catch (error) {
      setError("Failed to log out");
    }
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      await signInWithGoogle();
      localStorage.setItem("user", JSON.stringify([]));
      localStorage.setItem("image", JSON.stringify(auth.currentUser.photoURL));
      await redirectUser("");
    } catch (error) {
      console.error(error);
      setError("Failed to sign in");
    }
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const handleResetPassword = async (email) => {
    try {
      setMessage("");
      setError("");
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password");
    }
  };

  const setInvalidBorderColor = (element) => {
    element.current.parentElement.style.borderColor = "rgb(244, 33, 46)";
  };

  const nextPage =
    (e) =>
    async (pageContext, email = null) => {
      e.preventDefault();
      setError("");
      const exists = await checkIfEmailExists(email);
      if (page === 1) {
        if (pageContext === "login") {
          if (!exists) {
            setError("Sorry, we could not find your account.");
            setInvalidBorderColor(loginEmailRef);
          } else {
            setError("");
            setPage((currentPage) => currentPage + 1);
          }
        } else if (pageContext === "signup") {
          if (exists) {
            setError("Email is already taken");
            setInvalidBorderColor(signupEmailRef);
          } else {
            setError("");
            setPage((currentPage) => currentPage + 1);
          }
        }
      }
      if (page === 2) setPage((currentPage) => currentPage + 1);
    };

  const checkIfEmailExists = async (email) => {
    const emails = await fetchEmails();

    return JSON.stringify(emails).includes(JSON.stringify(email)) ? true : false;
  };

  const redirectUser = async (path) => {
    navigate(`/twitter-clone/${path}`, { replace: true });
  };

  const navigateToNextPage = () => {
    navigate(1);
  };

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  const value = {
    showSignupModal,
    setShowSignupModal,
    page,
    setPage,
    formData,
    setFormData,
    loginData,
    setLoginData,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    currentUser,
    setCurrentUser,
    error,
    setError,
    message,
    setMessage,
    loading,
    setLoading,
    content,
    setContent,
    signupEmailRef,
    signupPasswordRef,
    signupPasswordConfirmationRef,
    signupNextButton,
    loginEmailRef,
    loginPasswordRef,
    loginNextButton,
    navigate,
    handleChange,
    signUp,
    handleSignUp,
    login,
    handleLogin,
    logout,
    handleLogout,
    signInWithGoogle,
    handleGoogleSignIn,
    resetPassword,
    handleResetPassword,
    setInvalidBorderColor,
    nextPage,
    redirectUser,
    navigateToNextPage,
    navigateToPreviousPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
