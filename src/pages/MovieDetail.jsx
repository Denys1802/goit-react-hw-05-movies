import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/fetchApi';

function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (detailMovie === null) {
      getMovieById(id).then(data => setDetailMovie(data.data));
    }
  }, [detailMovie, id]);

  return (
    <>
      {detailMovie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={'detailMovie.original_title'}
              width={300}
              height={420}
            ></img>
            <h2>{detailMovie.original_title}</h2>
            <h3>
              Release date:
              <p>{detailMovie.release_date}</p>
            </h3>
            <h3>
              Overview:
              <p>{detailMovie.overview}</p>
            </h3>
            <h3>
              Popularity:
              <p>{detailMovie.popularity}</p>
            </h3>
          </div>
          <div>
            <h2>More information about movie</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default MovieDetail;
