import "./App.css";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import AddPlaces from "./places/pages/AddPlaces";
import Places from "./places/pages/Places";
import NavBar from "./shared/components/NavBar";
import Users from "./users/pages/Users";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./shared/context/auth-context";
import { useState, useCallback } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/places" element={<Places />} />
        <Route path="/add-new-place" element={<AddPlaces />} />
        <Route path="/places/:userId" element={<Places />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
