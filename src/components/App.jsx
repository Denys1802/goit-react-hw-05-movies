import { Container, Header, Link } from './App.styled';
import Movies from '../pages/Movies';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from 'pages/MovieDetail';
import Cast from './Cast';
import Review from './Review';
export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </Container>
  );
};
