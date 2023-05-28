import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/chamoxrchobana" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
