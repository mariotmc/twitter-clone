import { useState } from "react";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import SignupModal from "./components/Signup/SignupModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* {!isLoggedIn ? <LoginScreen /> : <Home />} */}
      {/* {!isLoggedIn && <LoginScreen />} */}
      <SignupModal />
    </>
  );
}

export default App;
