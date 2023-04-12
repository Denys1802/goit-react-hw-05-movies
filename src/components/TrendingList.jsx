import { Link } from 'react-router-dom';

function TrendingList({ trendings }) {
  return trendings.map(trend => {
    return (
      <Link key={trend.id} to={`/movie/${trend.id}`}>
        <li>{trend.title}</li>
      </Link>
    );
  });
}
export default TrendingList;
