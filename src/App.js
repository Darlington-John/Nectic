import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import ProductPage from './Pages/Products/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="products/:id" element={<ProductPage />} />{' '}
      </Routes>{' '}
    </BrowserRouter>
  );
}

export default App;
