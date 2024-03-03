import { Route, Routes } from "react-router-dom";
import Register from './Components/Register/register'
import Login from "./Components/Login/login";
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
import PrivacyData from "./Pages/Settings/PrivacyAndData/index";
import Claimed from "./Pages/Settings/ClaimedAccounts/index";
import Visibility from "./Pages/Settings/Visibility/index";
import PrivacyLayout from "./Pages/Privacy/Layout/index"
import Terms from './Pages/Privacy/TermsOfServices/index'
import PrivacyPolicy from './Pages/Privacy/PrivacyPolicy/index'
import Help from './Pages/Privacy/GetHelp/index'

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
            <Route path="/settings/privacy" element={<PrivacyData />}/>
            <Route path="/settings/claimedAccounts" element={<Claimed />}/>
            <Route path="/settings/visibility" element={<Visibility />}/>
        </Route>
      </Route>
      <Route path="/privacy" element={<PrivacyLayout />}>
            <Route path="/privacy/terms" element={<Terms />}/>
            <Route path="/privacy/privacy" element={<PrivacyPolicy />}/>
            <Route path="/privacy/help" element={<Help />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </Routes>
   </>
  );
}

export default App;
