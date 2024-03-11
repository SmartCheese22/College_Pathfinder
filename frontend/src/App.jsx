import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupS from './SignupS';
import SignupG from './SignupG';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginS from './LoginS';
import LoginG from './LoginG';
import Home from './Home';
import Nav from './Nav';
import Logout from './logout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path='/registerCollegeS' element={<SignupS />}></Route>
          <Route path='/registerCollegeG' element={<SignupG />}></Route>
          <Route path='/loginCollegeS' element={<LoginS />}></Route>
          <Route path='/loginCollegeG' element={<LoginG />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/adminLogin' element={<adminLogin />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
