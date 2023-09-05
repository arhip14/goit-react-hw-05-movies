import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMoviesByLetter, searchMoviesByTitle } from './api';

const SearchResults = () => {
  const { type, value } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        let searchResults = [];
        if (type === 'letter') {
          searchResults = await searchMoviesByLetter(value);
        } else if (type === 'title') {
          searchResults = await searchMoviesByTitle(value);
        }
        setResults(searchResults);
      } catch (error) {
        console.error('Помилка пошуку фільмів:', error);
      }
    };

    searchMovies();
  }, [type, value]);

  return (
    <div>
      <h2>Результати пошуку за "{value}"</h2>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
