import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom'
import AppNavbar from './AppNavbar';

function App() {
  return (
    <div className="appNav">
      <ul id="navList">
        <li >
          <Link to="/" id="linkElement" >Home</Link>
        </li>
        <li >
          <Link to="/campuses" id="linkElement">Campuses</Link>
        </li>
        <li >
          <Link to="/students" id="linkElement">Students</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
