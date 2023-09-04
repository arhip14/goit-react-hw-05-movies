import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./Home'));
const Movies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));

const App = () => {
  return (
    <Router basename="/">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} /> {/* Додайте маршрут для сторінки акторського складу */}
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
