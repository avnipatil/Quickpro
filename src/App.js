import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='*' element={<Header />}></Route>
            <Route path='/footer' element={<Footer />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
