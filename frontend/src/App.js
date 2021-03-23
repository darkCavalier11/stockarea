import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Home from "./Home";
import Inv from "./Inv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ text, filter, id }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/inventory">
            <Inv></Inv>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
