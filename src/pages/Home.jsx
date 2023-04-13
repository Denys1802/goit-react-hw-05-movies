import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/fetchApi';
import TrendingList from 'components/TrendingList';
import { WrapHome } from './Home.styled';
const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    fetchTrending().then(trendings => {
      setTrendings(trendings);
    });
  }, []);
  return (
    <WrapHome>
      <h1>Most popular movies</h1>
      {trendings.length > 0 && (
        <ul>
          <TrendingList trendings={trendings} />
        </ul>
      )}
    </WrapHome>
  );
};

export default Home;
