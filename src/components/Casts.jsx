import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovieCast } from './api.js'; 

const CastsContainer = styled.div`
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
`;

const Casts = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        if (response.data && response.data.cast) {
          setCast(response.data.cast);
        } else {
          console.error('Помилка завантаження акторського складу: дані не містять акторського складу');
        }
      } catch (error) {
        console.error('Помилка завантаження акторського складу:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <CastsContainer>
      <h3>Акторський склад:</h3>
      <ul>
        {cast && cast.length > 0 ? (
          cast.map((actor) => (
            <li key={actor.id}>
              <p>{actor.name}</p>
              <p>Роль: {actor.character}</p>
            </li>
          ))
        ) : (
          <p>Акторський склад відсутній</p>
        )}
      </ul>
    </CastsContainer>
  );
};

export default Casts;
