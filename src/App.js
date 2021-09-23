import { Route, Switch } from 'react-router';
// components
import Header from './components/Header/Header';
import Container from './components/Container/Container.jsx';
// pages
import HomePage from './pages/HomePage/HomePage.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/movies">
            <MoviesPage></MoviesPage>
          </Route>

          <Route exact path="/movies/:movieId">
            <MovieDetailsPage></MovieDetailsPage>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
