import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} ></Route>
        <Route path='product/:productId' element={<ProductDetail />} ></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
