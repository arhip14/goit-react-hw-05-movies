import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from './api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchResultContainer = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, #333, #000);
  padding: 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const MovieItem = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  margin-right: 20px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
    margin-right: 0;

    &:nth-child(2n) {
      margin-right: 20px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-right: 0;

    &:nth-child(2n) {
      margin-right: 0;
    }
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

const SearchResult = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');

    if (searchQuery) {
      searchMovies(searchQuery)
        .then((response) => {
          setSearchResults(response);
        })
        .catch((error) => {
          console.error('Помилка пошуку фільмів:', error);
        });
    }
  }, [location.search]);

  return (
    <SearchResultContainer>
      <Title>Результати пошуку фільмів</Title>
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
    </SearchResultContainer>
  );
};

export default SearchResult;
