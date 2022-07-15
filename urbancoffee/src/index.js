import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Home from './routes/Home.js'
import Article from './routes/Article.js'
import Create from './routes/Create.js'
import User from './routes/User.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'                 element={<Home/>} />
      <Route path='/Article/:docID'   element={<Article/>} />
      <Route path='/Create'           element={<Create/>} />
      <Route path='/User'             element={<User/>} />

      {/*
      <Route path='/Login'    element={<Login/>} />
      <Route path='/Signin'   element={<Signin/>} />
      <Route path='/Search'   element={<Search/>} />
      <Route path='/Settings' element={<Settings/>} />
      <Route path='/Messages' element={<Messages/>} />
      <Route path='/Admin'    element={<Admin/>} /> 
      */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
