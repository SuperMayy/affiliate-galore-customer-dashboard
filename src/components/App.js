import '../App.css';
import { AuthProvider } from '../context/AuthContext.js';
import AuthenticationPage from './AuthenticationPage';
import DashBoard from './DashBoard';
import Profile from './Profile';
import Layout from '../layouts/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return ( 
    <Router>
      <AuthProvider>
        <Routes>
            {/* public links */}
            <Route path="/signup" element={<AuthenticationPage />} />
            <Route path="/login" element={<AuthenticationPage isLogin={true} />} />

            {/* protected routes */}
            <Route element={<Layout />}>
              <Route exact path="/" element={<DashBoard />} />
              <Route exact path="/profile" element={<Profile />} />
            </Route>

            {/* 404: catch all */}
            {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
      </AuthProvider>
    </Router> 
  );
}

export default App;
