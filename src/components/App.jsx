import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Casts'));
const Reviews = lazy(() => import('./Reviews'));
const SearchResult = lazy(() => import('./SearchResults'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/movies/search/:q/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;