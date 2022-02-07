import { useState, createContext } from "react";
import LoginScreen from "./components/LoginScreen/LoginScreen";
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
      }}
    >
      {!isLoggedIn ? <LoginScreen /> : <Home />}
    </StateContext.Provider>
  );
}

export default App;
