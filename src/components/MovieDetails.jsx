import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from './api';

const MovieDetailsContainer = styled.div`
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
  margin: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #e74c3c;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MoviePoster = styled.img`
  max-width: 300px;
  margin-right: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const MovieDescription = styled.div`
  text-align: left;
  flex: 1;
  margin-top: 20px;
  padding-left: 20px; 

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0; 
  }
`;

const MovieTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #0074d9;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const BackButton = styled(Link)`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    background-color: #0056b3;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Помилка завантаження деталей фільму:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <Title>Деталі фільму</Title>

      <BackButton to="/">Повернутися назад</BackButton>
      {movieDetails && (
        <MovieInfo>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <MovieDescription>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <p>Рейтинг: {movieDetails.vote_average}</p>
            <p>Дата виходу: {movieDetails.release_date}</p>
            <p>Опис: {movieDetails.overview}</p>
          </MovieDescription>
        </MovieInfo>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
