import { useContext } from "react";
import { StateContext } from "../../App";
import { LoginFirstPage } from "./pages/LoginFirstPage";
import { LoginSecondPage } from "./pages/LoginSecondPage";

const LoginForm = () => {
  const { page } = useContext(StateContext);

  return (
    <>
      {page === 1 && <LoginFirstPage />}
      {page === 2 && <LoginSecondPage />}
    </>
  );
};

export default LoginForm;
