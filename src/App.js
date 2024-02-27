import { Route, Router, Routes } from "react-router-dom";
import Register from './Components/Register/UserRegister/register'
import BusinessRegister from './Components/Register/BusinessRegister/register'
import Login from "./Components/Login/UserLogin/login";
import BusinessLogin from "./Components/Login/BusinessLogin/login";
import Layout from "./Pages/Layout/layout";
import Home from './Pages/Home/home'
import Create from './Pages/Create/index'
import Profile from './Pages/Profile/index'

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/business/login" element={<BusinessLogin />}/>
        <Route path="/business/register" element={<BusinessRegister />}/>
      </Route>
    </Routes>
   </>
  );
}

export default App;
