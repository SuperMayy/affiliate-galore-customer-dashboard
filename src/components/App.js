import '../App.css';
import { AuthProvider } from '../context/AuthContext.js';
import AuthenticationPage from './AuthenticationPage';
import DashBoard from './DashBoard';
import Profile from './Profile';
import MyAffiliates from './MyAffiliates';
import UpdateProfile from './UpdateProfile';
import Error from './Error';
import Layout from '../layouts/Layout';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return ( 
    <Router>
      <AuthProvider>
        <Routes>
            {/* public links */}
            <Route path="/signup" element={<AuthenticationPage page="signup" />} />
            <Route path="/login" element={<AuthenticationPage page="login" />} />
            <Route path="/forgot-password" element={<AuthenticationPage page="forgotpassword" />} />

            {/* protected routes */}
            <Route element={<PrivateRoute/>}>
              <Route element={<Layout />}>
                <Route exact path="/" element={<DashBoard />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/my-affiliates" element={<MyAffiliates />} />
                <Route exact path="/update-profile" element={<UpdateProfile />} />
              </Route>
            </Route>

            {/* 404: catch all */}
            <Route path="*" element={<Error/>} />
        </Routes>
      </AuthProvider>
    </Router> 
  );
}

export default App;
