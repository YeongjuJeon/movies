import './App.css';
import React, { Component } from 'react';
import Home from './routes/Home';
import About from './routes/About';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './component/Navigation';
import Detail from './routes/Detail';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;