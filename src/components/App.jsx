import Layout from './Layout';
import Movies from '../pages/Movies';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from 'pages/MovieDetail';
import Cast from './Cast';
import Review from './Review';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
