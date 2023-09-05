import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails} from './api';
import Reviews from './Reviews';
import Casts from './Casts';


const MovieDetailsContainer = styled.div`
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
`;


const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #e74c3c;
  animation: fadeIn 1s ease-in-out;
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoviePoster = styled.img`
  max-width: 300px;
  margin-right: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;
`;

const MovieDescription = styled.div`
  text-align: left;
`;

const MovieTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #0074d9;
  margin-top: 0;
`;

const BackButton = styled.button`
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
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  margin: 20px 10px;
  display: inline-block;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showReviews, setShowReviews] = useState(false); 
  const [showCasts, setShowCasts] = useState(false); 

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

      <Link to="/" style={{ textDecoration: 'none' }}>
        <BackButton>Повернутися назад</BackButton>
      </Link>

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
      <ToggleButton onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Приховати відгуки' : 'Показати відгуки'}
      </ToggleButton>
      <ToggleButton onClick={() => setShowCasts(!showCasts)}>
        {showCasts ? 'Приховати акторський склад' : 'Показати акторський склад'}
      </ToggleButton>
      {showReviews && <Reviews movieId={movieId} />}
      {showCasts && <Casts movieId={movieId} />}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
