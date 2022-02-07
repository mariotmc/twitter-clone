import { createContext, useContext } from "react";
import { StateContext } from "../../App";
import SignupFirstPage from "./pages/SignupFirstPage";
import SignupSecondPage from "./pages/SignupSecondPage";
import SignupThirdPage from "./pages/SignupThirdPage";
import SignupFourthPage from "./pages/SignupFourthPage";
import SignupFifthPage from "./pages/SignupFifthPage";

export const FormInputChangeContext = createContext();

export const SignupForm = () => {
  const { setFormData, page } = useContext(StateContext);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <FormInputChangeContext.Provider value={handleChange}>
      {page === 1 && <SignupFirstPage />}
      {page === 2 && <SignupSecondPage />}
      {page === 3 && <SignupThirdPage />}
      {page === 4 && <SignupFourthPage />}
      {page === 5 && <SignupFifthPage />}
    </FormInputChangeContext.Provider>
  );
};
