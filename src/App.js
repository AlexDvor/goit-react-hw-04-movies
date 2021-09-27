import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
// components
import Header from './components/Header/Header';
import Container from './components/Container/Container.jsx';
// pages
const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.jsx' /* webpackChunkName: 'HomePage' */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage.jsx' /* webpackChunkName: 'MoviesPage' */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: 'MovieDetailsPage' */
  ),
);

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>

            <Route exact path="/movies">
              <MoviesPage></MoviesPage>
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage></MovieDetailsPage>
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
