import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
import BestProducts from "./Components/BestProducts/BestProducts";
import Club from "./Components/Club/Club";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Products />
      <Category />
      <BestProducts />
      <Club />
    </div>
  );
}

export default App;
