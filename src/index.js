import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Bis from './pages/Bis';
import Nopage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import { UserContextProvider } from './components/UserContext';
import AddNews from './pages/AddNews';
import PostPage from './pages/PostPage';
import EditNews from './pages/EditNews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {<Home />} />
        <Route path="bis" element={<Bis />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="add" element={<AddNews />} />
        <Route path="post/:id" element={<PostPage/>} />
        <Route path="edit/:id" element={<EditNews />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
    </UserContextProvider>
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
