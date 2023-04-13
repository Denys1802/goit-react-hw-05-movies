import { Link } from 'react-router-dom';

function TrendingList({ trendings }) {
  return trendings.map(trend => {
    return (
      <li key={trend.id}>
        <Link to={`/movies/${trend.id}`}>
          <p>{trend.title}</p>
        </Link>
      </li>
    );
  });
}
export default TrendingList;
