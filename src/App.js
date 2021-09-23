import { Route, Switch } from 'react-router';
// components
import Header from './components/Header/Header';
import Container from './components/Container/Container.jsx';
// pages
import MovieList from './pages/MovieList';

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MovieList></MovieList>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
