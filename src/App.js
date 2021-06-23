import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//======== Load Router Components ========  
import BookRender from "./components/users/BookRender";
import ListTable from "./components/users/ListTable";
import Xls from "./components/Xls";


function App() {
  return (
    <Router>
    <div>
        <nav className="header_main">
            <ul>
                <li>
                    <Link to="/xls">Xls</Link>
                </li>
                <li>
                    <Link to="/book">Book</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/xls"> <Xls /> </Route>   
            <Route path="/book"> <BookRender /> </Route> 
            <Route path="/list"> <ListTable /> </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
