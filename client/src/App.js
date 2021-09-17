import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";

function App() {
  <Router>
    <Switch>
      <Route path="/auth/login" component={Login} />
    </Switch>
  </Router>;
  return <div className="App-header"></div>;
}

export default App;
