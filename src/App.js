import { Route, Router, Routes } from "react-router-dom";
import Register from './Components/Register/UserRegister/register'
import BusinessRegister from './Components/Register/BusinessRegister/register'
import Login from "./Components/Login/UserLogin/login";
import BusinessLogin from "./Components/Login/BusinessLogin/login";
import Layout from "./Pages/Layout/layout";
import Home from './Pages/Home/home'
import Create from './Pages/Create/index'
import Profile from './Pages/Profile/Layout/index'
import Explore from './Pages/Explore/index'
import AddAccount from './Pages/AddAccount/index'
import SettingLayout from './Pages/Settings/Layout/layout'
import EditProfile from './Pages/Settings/EditProfile/index'
import AccountManagement from './Pages/Settings/AccountManagement/index'
import Created from "./Pages/Profile/CreatedComponent/created";
import Saved from "./Pages/Profile/SavedComponent/saved";

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/created" element={<Created />}/>
          <Route path="/profile/saved" element={<Saved />}/>
        </Route>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/addAccount" element={<AddAccount />}/>
        <Route path="/settings" element={<SettingLayout />}>
            <Route path="/settings/editProfile" element={<EditProfile />}/>
            <Route path="/settings/accountManagement" element={<AccountManagement />}/>
        </Route>
      </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/business/login" element={<BusinessLogin />}/>
        <Route path="/business/register" element={<BusinessRegister />}/>
    </Routes>
   </>
  );
}

export default App;
