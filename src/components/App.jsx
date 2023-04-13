import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const Layout = lazy(() => import('./Layout'));
const MovieDetail = lazy(() => import('pages/MovieDetail'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Review'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
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
