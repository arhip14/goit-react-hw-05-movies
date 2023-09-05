import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovieReviews } from './api';

const ReviewsContainer = styled.div`
  /* Ваші стилі для контейнера відгуків */
`;

const ReviewItem = styled.div`
  /* Ваші стилі для окремого відгуку */
`;

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Помилка завантаження відгуків:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      <h3>Відгуки:</h3>
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </ReviewItem>
        ))}
      </ul>
    </ReviewsContainer>
  );
};

export default Reviews;
