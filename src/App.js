import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home.jsx"
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


//import './App.css';

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/account' element={
        <ProtectedRoute>
        <Account />
        </ProtectedRoute>} />
    </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
