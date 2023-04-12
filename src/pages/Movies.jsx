import SearchList from 'components/SearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/fetchApi';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInputValue(movieTitle);
    if (movieTitle === '') return;
    //  getSearchMovie(searchParams.get('query')).then(data =>
    //    console.log(data.results)
    //  );

    getSearchMovie(searchParams.get('query')).then(data =>
      setSearchMovie(data.results)
    );
  }, [movieTitle, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setSearchParams({ query: inputValue.trim() });
    }
    e.target.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit">searh</button>
      </form>
      <SearchList searchMovie={searchMovie} />
    </>
  );
};

export default Movies;
