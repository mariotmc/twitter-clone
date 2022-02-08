import { useState, createContext, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LoginForm from "./components/Signup/LoginForm";
import Home from "./components/Home/Home";

export const StateContext = createContext();
export const FormInputChangeContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", month: "", day: "", year: "" });
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailInputRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignUp = async () => {
    try {
      setError("");
      setLoading(true);
      await signUp(formData.email, "TestingThisFeature123");
      setShowSignupModal(false);
      setIsLoggedIn(true);
      redirectUser("");
    } catch (error) {
      console.error(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  const redirectUser = (path) => {
    navigate(`/twitter-clone/${path}`);
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
      }}
    >
      <FormInputChangeContext.Provider value={{ handleChange }}>
        <Routes>
          <Route path="/twitter-clone/" element={<Home />} />
          <Route path="/twitter-clone/signup" element={<LoginScreen />} />
          <Route path="/twitter-clone/login" element={<LoginForm />} />
        </Routes>
      </FormInputChangeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
