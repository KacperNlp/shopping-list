import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Content />
      </div>
    </Router>
  );
}

export default App;
