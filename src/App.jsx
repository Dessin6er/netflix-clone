import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import { AuthContextProvider } from "./AuthContext";
import Account from "./pages/account";
import ProtectedRout from "./components/ProtectedRout";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/home/:id"
            element={
              <ProtectedRout>
                <Home />
              </ProtectedRout>
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRout>
                <Account />
              </ProtectedRout>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
