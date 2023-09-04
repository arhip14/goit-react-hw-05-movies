import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTrendingMovies, searchMovies } from './api';
import { toast } from 'react-toastify';

const HomeContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const MovieItem = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Помилка завантаження популярних фільмів:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchQuery);

      if (!searchQuery.trim()) {
        toast.error('Введіть текст для пошуку');
        return;
      }

      setSearchResults(response.data.results);

      if (response.data.results.length === 0) {
        toast.info('Нічого не знайдено');
      } else {
        toast.success('Успішно знайдено');
      }
    } catch (error) {
      console.error('Помилка пошуку фільмів:', error);
    }
  };

  return (
    <HomeContainer>
      <Title>Популярні фільми</Title>
      <div>
        <SearchBar
          type="text"
          placeholder="Пошук фільмів"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Пошук</SearchButton>
      </div>
      <MovieContainer>
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <MovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3>{movie.title}</h3>
                </Link>
              </MovieItem>
            ))
          : trendingMovies.map((movie) => (
              <MovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3>{movie.title}</h3>
                </Link>
              </MovieItem>
            ))}
      </MovieContainer>
    </HomeContainer>
  );
};

export default Home;
