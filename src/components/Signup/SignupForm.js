import { useAppContext } from "../../Context";
import SignupFirstPage from "./pages/SignupFirstPage";
import SignupSecondPage from "./pages/SignupSecondPage";
import SignupThirdPage from "./pages/SignupThirdPage";

export const SignupForm = () => {
  const { page } = useAppContext();

  return (
    <>
      {page === 1 && <SignupFirstPage />}
      {page === 2 && <SignupSecondPage />}
      {page === 3 && <SignupThirdPage />}
    </>
  );
};
