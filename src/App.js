import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
import BestProducts from "./Components/BestProducts/BestProducts";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Products />
      <Category />
      <BestProducts />
    </div>
  );
}

export default App;
