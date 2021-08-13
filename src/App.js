import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import PopularSeries from "./pages/PopularSeries";

const App = () => {
  useEffect(()=>{
    if (localStorage.getItem("dark")) {
      document.documentElement.classList.add("dark")
    }
  })
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/PopularMovies" component={PopularMovies} />
        <Route path="/PopularSeries" component={PopularSeries} />
      </Switch>
    </Router>
  );
};

export default App;
