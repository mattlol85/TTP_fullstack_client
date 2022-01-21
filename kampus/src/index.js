import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Campuses from './components/Campuses';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import Students from './components/Students';

ReactDOM.render(
  <React.StrictMode>
    <Header />


    <Router>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="campuses" element={<Campuses />}></Route>
        <Route path="students" element={<Students />}></Route>
      </Routes>
    </Router>


    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
