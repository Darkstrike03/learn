import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar.js';
import ProductList from './component/ProductList.js';

function App() {
  const productList = [
    {
      price: 9999,
      name: "Iphone 12",
      quantity: 0, 
    },
    {
      price: 9999,
      name: "realme 8",
      quantity: 0, 
    }
  ];

  return (
    <>
      <Navbar />  
      <ProductList productList={productList} />
    </>
  );
}

export default App;
