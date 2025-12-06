import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Movielist from './components/movielist/Movielist';
import Details from './components/details/Details';
import Trending from './components/Trending/Trending';


const App = () => {
  return (
    <Router>
      <Navbar />

<Trending/>

      <Routes>
        <Route path="/" element={<Movielist />} />
                <Route path="movie/:id" element={<Details  />} />

 
      </Routes>
    </Router>
  );
};

export default App;
