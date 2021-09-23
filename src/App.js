import { Route, Switch } from 'react-router';
// components
import Header from './components/Header/Header';
import Container from './components/Container/Container.jsx';
// pages
import HomePage from './pages/HomePage';
import Movies from './pages/Movies/Movies';

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
            <Movies></Movies>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
