import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { searchMovies } from './api';
import { toast } from 'react-toastify';

const MoviesContainer = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

const responsiveStyles = css`
  @media (max-width: 576px) {
    width: 100%; 
    margin-bottom: 10px;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: calc(50% - 20px); 
    margin-bottom: 10px;
  }

  @media (min-width: 993px) {
    width: calc(33.33% - 20px); 
    margin-bottom: 20px; 
  }
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-family: 'Arial', sans-serif;

  ${responsiveStyles}
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;

  ${responsiveStyles}
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff5733;
  }

  ${responsiveStyles}
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  ${responsiveStyles}
`;

const MovieItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  ${responsiveStyles}

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #0074d9;
  text-transform: uppercase;
`;

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchQuery);

      if (!searchQuery.trim()) {
        toast.error('Введіть текст для пошуку');
        return;
      }

      setSearchResults(response.data.results || []);

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
    <MoviesContainer>
      <Title>Пошук фільмів</Title>
      <div>
        <BackButton to="/">Повернутися назад</BackButton>
        <SearchBar
          type="text"
          placeholder="Пошук фільмів"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Пошук</SearchButton>
      </div>
      <MovieContainer>
        {searchResults && searchResults.length > 0
          ? searchResults.map((movie) => (
              <MovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>
              </MovieItem>
            ))
          : null}
      </MovieContainer>
    </MoviesContainer>
  );
};

export default Movies;
