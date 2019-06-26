import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Store from './store/Store';

function App() {
  return (
    <Store>
      <div className="App">
        <Navbar />
        <div className="container" style={{marginTop: '5em'}}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route patch="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </Store>
  );
}

export default App;
