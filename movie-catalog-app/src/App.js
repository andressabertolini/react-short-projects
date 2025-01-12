import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MoviePage from './pages/MoviePage';

function App() {

  return (
    <div className="app">
      {/* <Router basename="/react-short-projects/movie-catalog-app"> */}
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
