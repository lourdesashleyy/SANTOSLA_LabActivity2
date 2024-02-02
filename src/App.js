import Header from "./Header";
import ProductBtnList from "./ProductBtnList";
import Tabs from "./Tabs";
import AngelList from "./AngelList";
import ContentCards from "./ContentCards";
import StoreCards from "./StoreCards";
import Share from "./Share";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="container">
        <Header />
        <ProductBtnList />
        <Tabs />
        <AngelList />
      </div>
      <div className="cards">
        <ContentCards />
        <StoreCards />
      </div>
      <Share />
      <Footer />
    </div>
  );
}

export default App;
