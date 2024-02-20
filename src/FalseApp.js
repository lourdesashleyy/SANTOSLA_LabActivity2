import HeaderCopy from "./HeaderCopy";
import ProductBtnListCopy from "./ProductBtnListCopy";
import FalseTabs from "./FalseTabs";
import AngelListCopy from "./AngelListCopy";
import ContentCards from "./ContentCards";
import StoreCards from "./StoreCards";
import Share from "./Share";
import Footer from "./Footer";
import "./App.css";

function FalseApp() {
  return (
    <div className="body">
      <div className="container">
        <HeaderCopy />
        <ProductBtnListCopy />
        <FalseTabs />
        <AngelListCopy />
      </div>
    </div>
  );
}

export default FalseApp;
