import { useEffect, useState } from 'react';
import { FetchTrending } from 'services/fetchApi';
import TrendingList from 'components/TrendingList';
const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    FetchTrending().then(trendings => {
      setTrendings(trendings);
    });
  }, []);
  return (
    <>
      <h1>Most popular movies</h1>
      <ul>{trendings.length > 0 && <TrendingList trendings={trendings} />}</ul>
    </>
  );
};

export default Home;
