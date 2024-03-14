import { Route, Routes } from "react-router-dom";
import Register from '../Register/register'
import Login from "../Login/login";
import Layout from "../../Pages/Layout/layout";
import Home from '../../Pages/Home/home'
import Create from '../../Pages/Create/index'
import Profile from '../../Pages/Profile/Layout/index'
import AddAccount from '../../Pages/AddAccount/index'
import SettingLayout from '../../Pages/Settings/Layout/layout'
import EditProfile from '../../Pages/Settings/EditProfile/index'
import AccountManagement from '../../Pages/Settings/AccountManagement/index'
import Created from "../../Pages/Profile/CreatedComponent/created";
import Saved from "../../Pages/Profile/SavedComponent/saved";
import PrivacyData from "../../Pages/Settings/PrivacyAndData/index";
import Claimed from "../../Pages/Settings/ClaimedAccounts/index";
import Visibility from "../../Pages/Settings/Visibility/index";
import PrivacyLayout from "../../Pages/Privacy/Layout/index"
import Terms from '../../Pages/Privacy/TermsOfServices/index'
import PrivacyPolicy from '../../Pages/Privacy/PrivacyPolicy/index'
import Community from '../../Pages/Privacy/Community/index'
import Advertising from '../../Pages/Privacy/Advertising/index'
import Developers from '../../Pages/Privacy/Developers/index'
import PostDetails from '../../Pages/PostDetails/index'
import UserProfile from '../../Pages/UsersProfile/Layout/index'
import UserCreated from '../../Pages/UsersProfile/CreatedComponent/created'
import UserSaved from '../../Pages/UsersProfile/SavedComponent/saved'

const Index = () => {
    return (
        <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/postDetails" element={<PostDetails />}/>
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/created" element={<Created />}/>
          <Route path="/profile/saved" element={<Saved />}/>
        </Route>
        <Route path="/userProfile" element={<UserProfile />}>
          <Route path="/userProfile/created" element={<UserCreated />}/>
          <Route path="/userProfile/saved" element={<UserSaved />}/>
        </Route>
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
          <Route path="/privacy/community" element={<Community />}/>
          <Route path="/privacy/advertising" element={<Advertising />}/>
          <Route path="/privacy/developers" element={<Developers />}/>
      </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </Routes>
    );
}

export default Index;