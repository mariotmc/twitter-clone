import { useEffect } from "react";
import { useAppContext } from "../../Context";
import { LoginFirstPage } from "./pages/LoginFirstPage";
import { LoginSecondPage } from "./pages/LoginSecondPage";

const LoginForm = () => {
  const { page } = useAppContext();

  useEffect(() => {
    document.title = "Twitter";
  }, []);

  return (
    <>
      {page === 1 && <LoginFirstPage />}
      {page === 2 && <LoginSecondPage />}
    </>
  );
};

export default LoginForm;
