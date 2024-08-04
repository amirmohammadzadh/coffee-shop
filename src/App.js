import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import Category from "./Components/Category/Category";
import BestProducts from "./Components/BestProducts/BestProducts";
import Club from "./Components/Club/Club";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Products />
      <Category />
      <BestProducts />
      <Club />
      <Blogs />
      <Contact />
      <Services />
    </div>
  );
}

export default App;
