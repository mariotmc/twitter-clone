import { useContext } from "react";
import { StateContext } from "../../App";
import SignupFirstPage from "./pages/SignupFirstPage";
import SignupSecondPage from "./pages/SignupSecondPage";
import SignupThirdPage from "./pages/SignupThirdPage";

export const SignupForm = () => {
  const { page } = useContext(StateContext);

  return (
    <>
      {page === 1 && <SignupFirstPage />}
      {page === 2 && <SignupSecondPage />}
      {page === 3 && <SignupThirdPage />}
    </>
  );
};
