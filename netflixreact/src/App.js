import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextprovider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <AuthContextprovider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/account' element={
        <ProtectedRoute>
          <Account />
          </ProtectedRoute>
        }/>


      </Routes>
      </AuthContextprovider>
    </>
  );
}

export default App;
