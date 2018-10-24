import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch/NoMatch";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import BookClub from "./pages/BookClub/BookClub";
import './App.css';
 

const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bookclub" component={BookClub} />
          <Route component={NoMatch} />
        </Switch>      
      </div>
    </Router>
  );
  
  export default App;