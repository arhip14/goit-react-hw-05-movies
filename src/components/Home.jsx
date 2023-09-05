import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getTrendingMovies, searchMovies } from './api';
import { toast } from 'react-toastify';

const HomeContainer = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, #333, #000);
  padding: 20px;
  color: white;
  min-height: 100vh; 
    text-align: center;
  font-family: 'Arial', sans-serif; 
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #fff; 
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
  background-color: #333;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: white; 
  text-transform: uppercase;
  margin: 10px 0;
  user-select: none; 
  text-decoration: none; 
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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
                <MovieLink to={`/movies/${movie.id}`}>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieLink>
              </MovieItem>
            ))
          : trendingMovies.map((movie) => (
              <MovieItem key={movie.id}>
                <MovieLink to={`/movies/${movie.id}`}>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </MovieLink>
              </MovieItem>
            ))}
      </MovieContainer>
    </HomeContainer>
  );
};

export default Home;
