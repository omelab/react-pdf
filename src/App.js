import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//======== Load Router Components ======== 
import Users from "./components/users/Index";
import BookRender from "./components/users/BookRender";
import ListTable from "./components/users/ListTable";


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
                    <Link to="/users">Users Table</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route path="/book"> <BookRender /> </Route>
            <Route path="/users"> <Users /> </Route>
            <Route path="/">  <ListTable /> </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
