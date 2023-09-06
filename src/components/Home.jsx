import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTrendingMovies, searchMovies } from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
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
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 400px;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:focus {
    outline: none;
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
    padding: 4px 8px;
  }
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

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 576px) {
    width: 100%;
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

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [inputReset, setInputReset] = useState(false);

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
      if (!searchQuery.trim()) {
        toast.error('Введіть текст для пошуку', {
          position: 'top-right',
          autoClose: 3000,
        });
        return;
      }

      const response = await searchMovies(searchQuery);

      if (response.length === 0) {
        toast.info('Нічого не знайдено', {
          position: 'top-right',
          autoClose: 3000,
        });
        setSearchResults([]);
      } else {
        setSearchResults(response);
      }
    } catch (error) {
      console.error('Помилка пошуку фільмів:', error);
    }
  };

  return (
    <HomeContainer>
      <Title>Популярні фільми</Title>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Пошук фільмів"
          value={inputReset ? '' : searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setInputReset(false);
          }}
        />
        <SearchButton onClick={handleSearch}>
          <FaSearch />
          Пошук
        </SearchButton>
      </SearchBar>
      <MovieContainer>
        {searchResults.length > 0
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
          : trendingMovies.map((movie) => (
              <MovieItem key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieImage
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Link>
              </MovieItem>
            ))}
      </MovieContainer>
      <ToastContainer autoClose={3000} />
    </HomeContainer>
  );
};

export default Home;
