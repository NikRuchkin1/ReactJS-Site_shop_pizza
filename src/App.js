import Axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizzas';
import filters from './redux/reducer/filters';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    Axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/Home" component={Home} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
