import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovieCredits } from './api';

const CastsContainer = styled.div`
  margin-top: 20px;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CastItem = styled.div`
  width: calc(33.3333% - 20px);
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-left: 0; 
  }
`;

const CastImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 240px; 
  }

  @media (max-width: 576px) {
    max-height: 180px; 
  }
`;

const CastName = styled.h4`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff; 

  @media (max-width: 576px) {
    font-size: 1rem; 
  }
`;

const CastCharacter = styled.p`
  margin-top: 5px;
  font-size: 1rem;
  color: #fff;

  @media (max-width: 576px) {
    font-size: 0.9rem; 
  }
`;

const Casts = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Помилка завантаження акторського складу:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <CastsContainer>
      <h3>Акторський склад:</h3>
      <CastList>
        {cast.map((actor) => (
          <CastItem key={actor.id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={`Фото ${actor.name}`}
            />
            <CastName>{actor.name}</CastName>
            <CastCharacter>Роль: {actor.character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </CastsContainer>
  );
};

export default Casts;
