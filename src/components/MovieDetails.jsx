import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from './api';
import Reviews from './Reviews';
import Casts from './Casts';

const MovieDetailsContainer = styled.div`
  color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
  text-align: center;
  background: linear-gradient(to bottom, #333, #000);
  padding: 20px;
  color: white;
  min-height: 100vh;
  align-items: center;
  text-align: center;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  margin bottom: 20px;
  text-transform: uppercase;
  color: #e74c3c;
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MoviePoster = styled.img`
  max-width: 300px;
  margin-right: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease-in-out;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const MovieDescription = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MovieTitle = styled.h3`
  font-size: 36px;
  font-weight: bold;
  color: #0074d9;
  margin-top: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;
  display: inline-block;

  @media (max-width: 576px) {
    padding: 8px 16px;
    font-size: 16px;
  }
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

  @media (max-width: 576px) {
    padding: 8px 16px;
    font-size: 16px;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showCasts, setShowCasts] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error loading movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <MovieDetailsContainer>
      <Title>Movie Details</Title>

      <Link to={searchQuery ? `/movies?q=${searchQuery}` : '/'}>
        <HomeButton>Повернутися Назад</HomeButton>
      </Link>

      {movieDetails && (
        <MovieInfo>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <MovieDescription>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <p>Rating: {movieDetails.vote_average}</p>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Description: {movieDetails.overview}</p>
          </MovieDescription>
        </MovieInfo>
      )}
      <ToggleButton onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </ToggleButton>
      <ToggleButton onClick={() => setShowCasts(!showCasts)}>
        {showCasts ? 'Hide Casts' : 'Show Casts'}
      </ToggleButton>
      {showReviews && <Reviews movieId={movieId} />}
      {showCasts && <Casts movieId={movieId} />}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
