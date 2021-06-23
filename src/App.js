import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//======== Load Router Components ========  
import BookRender from "./components/users/BookRender";
import ListTable from "./components/users/ListTable";
import XlsComponent from "./components/xlsComponent";


function App() {
  return (
    <Router>
    <div>
        <nav className="header_main">
            <ul>
                <li>
                    <Link to="/">List</Link>
                </li>
                <li>
                    <Link to="/book">Book</Link>
                </li>
                <li>
                    <Link to="/xls">Xls</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/book"> <BookRender /> </Route>
            <Route path="/xls"> <XlsComponent /> </Route>
            <Route path="/"> <ListTable /> </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
