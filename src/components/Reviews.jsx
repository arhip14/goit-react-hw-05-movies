import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovieReviews } from './api';
const ReviewsContainer = styled.div`
  background-color: #333;
  color: white;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-top: 20px;
`;

const ReviewItem = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px 0;

  &:first-child {
    border-top: none; 
  }
`;

const ReviewAuthor = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ReviewContent = styled.div`
  margin-top: 5px;
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
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ul>
    </ReviewsContainer>
  );
};

export default Reviews;
