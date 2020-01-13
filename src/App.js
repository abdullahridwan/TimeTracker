// (1) import all the basics 
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
//import logo from './logo.svg';
//import './App.css';


//(2) import all the components 
import Navbar from "./components/navbar.component";
import DataList from "./components/data-list.component";
import CreateEntry from "./components/create-entry.component"


//(3) Put everything ina container and start 
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component = {DataList} />
        <Route path="/createEntry" exact component = {CreateEntry} />
      </div>
    </Router>
  );
}

//(4) export
export default App;
