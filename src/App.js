import { useState } from "react";
import LoginScreen from "./components/LoginScreen/LoginScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* {!isLoggedIn ? <LoginScreen /> : <Home />} */}
      {!isLoggedIn && <LoginScreen />}
    </>
  );
}

export default App;
