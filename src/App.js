
import './App.css';
import { BrowserRouter, Routes, Route , Switch, Router } from 'react-router-dom';
import  Login from  "./Login_page.jsx";
import Singup from "./Signup_page.jsx";
import Profile from "./Profile_page.jsx";
import Home from "./Home_page.jsx";
import CustomNavbar from './CustomNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
   
    //<h1>supposed home page</h1>
     <BrowserRouter>
    {/* <CustomNavbar/> */}
     <ToastContainer/> 
     <Routes>
      <Route path = "/"  element = {<Home/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/signup" element = {<Singup/> } />
      <Route path = "/private"  element = {<PrivateRoute/> }>
      <Route path = "profile" element = {<Profile/> }/>
      </Route>
   
      </Routes>
      </BrowserRouter>
  );
}

export default App;
