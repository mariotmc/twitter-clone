import { Routes, Route } from "react-router-dom";
import ContextProvider from "./Context";
import PrivateRoute from "./PrivateRoute";
import Home from "./components/Home/Home";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LoginForm from "./components/Signup/LoginForm";
import PasswordReset from "./components/PasswordReset/PasswordReset";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route
          path="/twitter-clone/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/twitter-clone/signup" element={<LoginScreen />} />
        <Route path="/twitter-clone/login" element={<LoginForm />} />
        <Route path="/twitter-clone/password-reset" element={<PasswordReset />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
