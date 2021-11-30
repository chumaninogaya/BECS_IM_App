import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./App";
// import Login from "./components/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
        {/* if(user) ( return <Redirect to="/App" />) */}
        <Route path="/login" component={Login} />
        {/* <Route Redirect to="/login" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default App;
