// Приклад API-запиту
// https://api.themoviedb.org/3/movie/popular?api_key=cf86f342db546e57780c24367a3912bf
//https://api.themoviedb.org/3/trending/movie/day?api_key=cf86f342db546e57780c24367a3912bf
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '?api_key=cf86f342db546e57780c24367a3912bf';

export async function FetchTrending() {
  const trending = await axios.get(`${BASE_URL}/trending/movie/day${API_KEY}`);

  if (trending.status === 200) {
    return trending.data.results;
  }
}

//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export async function getMovieById(movieId) {
  const movie = await axios.get(
    `${BASE_URL}/movie/${movieId}${API_KEY}&language=en-US`
  );
  if (movie.status === 200) {
    return movie;
  }
}

//api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export async function getCastMovie(movieId) {
  const cast = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`
  );
  if (cast.status === 200) {
    return cast;
  }
}

//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export async function getReviewMovie(movieId) {
  const review = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US`
  );
  if (review.status === 200) {
    return review;
  }
}

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export async function getSearchMovie(query) {
  const search = await axios.get(
    `${BASE_URL}/search/movie/${API_KEY}&query=${query}`
  );
  if (search.status === 200) {
    return search;
  }
}
