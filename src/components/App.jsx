import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./Home'));
const Movies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const App = () => {
  return (
    <Router basename='films finder'>
      <div>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/movies' element={Movies} />
          <Route path='/movies:/movieId' element={MovieDetails} />
          <Route path='/movies:/movieId/cast' element={Cast} />
          <Route path='/movies:/movieId/reviews' element={Reviews} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;