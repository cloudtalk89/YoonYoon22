import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import LoadingSection from './pages/LoadingSection';
import MemoryGardern from './pages/MemoryGardern';
import MusicPlace from './pages/MusicPlace';
import LetterPlace from './pages/LetterPlace';
import Birthday from './pages/Birthday';
import Gift from './pages/Gift';

const App = () => {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingSection />} />
        <Route path="/memory" element={<MemoryGardern />} />
        <Route path="/music" element={<MusicPlace />} />
        <Route path="/letter" element={<LetterPlace />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<h1>ROUTER WORKING</h1>} />
      </Routes>
  )
}

export default App