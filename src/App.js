import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Header from './components/Header';

const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "home-page" */),
);

const FavoritePage = lazy(() =>
  import('./components/FavoritePage' /* webpackChunkName: "favorite-page" */),
);


function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="App">
      <Header toggleModal={toggleModal} />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/favorites"
            exact >
            <FavoritePage toggleModal={toggleModal} showModal={showModal} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
