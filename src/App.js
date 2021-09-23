import { Route, Switch } from 'react-router';
// components
import Header from './components/Header/Header';
import Container from './components/Container/Container.jsx';
// pages
import MovieList from './pages/MovieList';
import Movie from './pages/Movie';

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MovieList></MovieList>
          </Route>

          <Route exact path="/movies">
            <Movie></Movie>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
