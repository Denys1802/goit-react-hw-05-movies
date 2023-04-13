import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/fetchApi';
import {
  WrapMovie,
  Content,
  WrappPage,
  Item,
  ListItem,
} from './MovieDetail.styled';
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
        <WrappPage>
          <WrapMovie>
            <img
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={'detailMovie.original_title'}
              width={300}
              height={420}
            ></img>
            <Content>
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
            </Content>
          </WrapMovie>
          <div>
            <h2>More information about movie</h2>
            <ListItem>
              <li>
                <Item to="cast">Cast</Item>
              </li>
              <li>
                <Item to="reviews">Reviews</Item>
              </li>
            </ListItem>
            <Outlet />
          </div>
        </WrappPage>
      )}
    </>
  );
}

export default MovieDetail;
