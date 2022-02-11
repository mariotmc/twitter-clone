import { useAppContext } from "../../Context";
import { LoginFirstPage } from "./pages/LoginFirstPage";
import { LoginSecondPage } from "./pages/LoginSecondPage";

const LoginForm = () => {
  const { page } = useAppContext();

  return (
    <>
      {page === 1 && <LoginFirstPage />}
      {page === 2 && <LoginSecondPage />}
    </>
  );
};

export default LoginForm;
