import Navigation from "./Navigation";
function Header() {
  return (
    <div className="header">
      <Navigation />
      <div className="logodiv">
        <img className="logo" src="./SonnyAngel_logo.png" alt="logo" />
      </div>

      <div className="languagediv">
        <a>English</a>
      </div>
    </div>
  );
}
export default Header;
