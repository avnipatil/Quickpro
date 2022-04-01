import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='*' element={<Home />}></Route>
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
