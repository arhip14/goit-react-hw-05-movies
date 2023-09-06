import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { searchMovies } from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';

const MoviesContainer = styled.div`
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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BackButton = styled(Link)`
  padding: 6px 12px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #ff5733;
  }

  @media (max-width: 576px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const SearchButton = styled.button`
  padding: 6px 12px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 16px;
  margin-left: 10px;

  svg {
    margin-right: 5px;
    font-size: 18px;
  }

  &:hover {
    background-color: #ff5733;
    transform: scale(1.05);
  }

  @media (max-width: 576px) {
    padding: 8px 16px;
    font-size: 16px;
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

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      if (!searchQuery.trim()) {
        toast.error('Введіть текст для пошуку');
        return;
      }

      const response = await searchMovies(searchQuery);

      if (response.length === 0) {
        toast.info('Нічого не знайдено');
        setSearchResults([]);
      } else {
        setSearchResults(response);
      }
    } catch (error) {
      console.error('Помилка пошуку фільмів:', error);
      toast.error('Помилка пошуку фільмів');
    }
  };

  return (
    <MoviesContainer>
      <Title>Пошук фільмів</Title>
      <SearchContainer>
        <BackButton to="/">Повернутися назад</BackButton>
        <SearchBar
          type="text"
          placeholder="Пошук фільмів"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch /> Пошук
        </SearchButton>
      </SearchContainer>
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
      <ToastContainer autoClose={3000} />
    </MoviesContainer>
  );
};

export default Movies;
