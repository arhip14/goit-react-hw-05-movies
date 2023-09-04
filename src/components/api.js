import axios from "axios";
import { toast } from 'react-toastify';
const API_KEY = 'f7ae4055ff38708d9955df5ca1f5f0c3';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = () => {
  return api.get('/trending/movie/week');
};

export const searchMovies = async (query) => {
  try {
    if (!query) {
      toast.error('Введіть текст для пошуку');
      return [];
    }
    const response = await api.get('/search/movie', {
      params: {
        query,
      },
    });
  
    const results = response.data.results;

    if (results.length === 0) {
      toast.info('Нічого не знайдено');
      return [];
    }

    toast.success('Успішно знайдено');
    return results;
  } catch (error) {
    throw error;
  };
};

export const getMovieDetails = (movieId) => {
  return api.get(`/movie/${movieId}`);
};

export const getMovieReviews = (movieId) => {
  return api.get(`/movie/${movieId}/reviews`);
}


