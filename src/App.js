import "./App.css";
import TrueApp from "./TrueApp";
import FalseApp from "./FalseApp";

function App() {
  const IsLimited = false;
  return <div>{IsLimited ? <TrueApp /> : <FalseApp />}</div>;
}

export default App;
