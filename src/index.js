import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Bis from './pages/Bis';
import Nopage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element = {
          <Home />
        } />

        <Route path="bis" element={  
          <Bis />
        } />

        <Route path="login" element={
          <Login />
        } />

        <Route path="register" element={
          <Register />
        } />

      </Route>
    </Routes>
  </BrowserRouter>

);
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
