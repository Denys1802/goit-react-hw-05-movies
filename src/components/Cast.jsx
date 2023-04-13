import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/fetchApi';
import { ListCast } from './Cast.styled';

function Cast() {
  const [castData, setCastData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (castData === null) {
      getCastMovie(id).then(data => setCastData(data.data.cast));
    }
  }, [castData, id]);

  return (
    castData && (
      <ListCast>
        {castData.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : 'https://via.placeholder.com/150x225'
                }
                alt={actor.name}
                width={150}
                height={200}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ListCast>
    )
  );
}

export default Cast;
