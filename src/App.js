import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Mint from "./pages/Mint.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mint" component={Mint} exact />
      </Switch>
    </Router>
  );
}

export default App;
