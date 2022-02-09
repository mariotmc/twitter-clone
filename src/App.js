import { useState, createContext, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LoginForm from "./components/Signup/LoginForm";
import Home from "./components/Home/Home";

export const StateContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    month: "",
    day: "",
    year: "",
  });
  const [loginData, setLoginData] = useState({ signInEmail: "", signInPassword: "" });
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "passwordConfirmation") {
      setPasswordConfirmation(e.target.value);
    } else if (e.target.name === "signInEmail") {
      setLoginData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    } else if (e.target.name === "signInPassword") {
      setLoginData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
      });
    } else {
      setFormData((prevState) => {
        return { ...prevState, [e.target.name]: e.target.value };
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
      await signUp(formData.email, password);
      await redirectUser("home", { replace: true });
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
      await redirectUser("home", { replace: true });
    } catch (error) {
      console.error(error);
      setError("Failed to sign in");
    }

    setLoading(false);
  };

  const handleLogout = () => {};

  const redirectUser = async (path) => {
    navigate(`/twitter-clone/${path}`);
  };

  const navigateToNextPage = () => {
    navigate(1);
  };

  const navigateToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <StateContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        showSignupModal,
        setShowSignupModal,
        formData,
        setFormData,
        loginData,
        setLoginData,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        page,
        setPage,
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        error,
        setError,
        signUp,
        handleSignUp,
        emailInputRef,
        redirectUser,
        handleChange,
        handleLogin,
      }}
    >
      <Routes>
        <Route path="/twitter-clone/home" element={<Home />} />
        <Route path="/twitter-clone/signup" element={<LoginScreen />} />
        <Route path="/twitter-clone/login" element={<LoginForm />} />
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
