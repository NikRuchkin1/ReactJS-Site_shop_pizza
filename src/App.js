import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pazzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/Home" render={() => <Home items={pazzas} />} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
