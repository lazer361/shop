import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import {
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Order from './pages/Order';
import NotFound from './pages/NotFound';

export const SearchContext = React.createContext('');

function App() {
 
  const [searchValue, setSearchValue] = React.useState('');
  const [payCount, setPayCount] = React.useState(0);
  const [moneyCount, setMoneCount] = React.useState(0);
  const [purchases, setPurchases] = React.useState([]);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue, payCount, setPayCount, moneyCount, setMoneCount, purchases, setPurchases}}>
          <Header />
          <div className="content">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="*" element={<NotFound />}/>
              </Routes>
          </div>
      </SearchContext.Provider>
  </div>
  );
}

export default App;
