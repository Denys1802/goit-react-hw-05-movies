//import SearchList from 'components/SearchList';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/fetchApi';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInput(movieTitle);
    if (movieTitle === '') return;
    getSearchMovie(movieTitle).then(data => setMovies(data.data.results));
  }, [movieTitle]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      setSearchParams({ query: input.trim() });
    }

    //e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieTitle}
          onChange={e => setSearchParams({ query: e.target.value })}
        />
        <button type="submit">searh</button>
      </form>

      {movies > 0 &&
        movies.map(movie => {
          return (
            <ul>
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://via.placeholder.com/500x400'
                    }
                    alt={movie.title}
                    height={400}
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            </ul>
          );
        })}
    </>
  );
};

export default Movies;
