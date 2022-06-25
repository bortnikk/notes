import React from 'react';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Notes from './pages/Notes';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
    </div>
  );
}

export default App;
