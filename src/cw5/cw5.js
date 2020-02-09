import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyForm from "./cw1/cw1";
import Dashboard from "./cw2/cw2";
import Altkom from "./cw3/cw3";
import Testowa from "./cw4/cw4";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="./cw1/cw1">cw1</Link>
                    </li>
                    <li>
                        <Link to="./cw2/cw2">cw2</Link>
                    </li>
                    <li>
                        <Link to="./cw3/cw3">cw3</Link>
                    </li>
                    <li>
                        <Link to="./cw4/cw4">cw4</Link>
                    </li>
                </ul>

                <hr/>

                <Switch>
                    <Route path="./cw1/cw1">
                        <MyForm/>
                    </Route>
                    <Route path="./cw2/cw2">
                        <Dashboard/>
                    </Route>
                    <Route path="./cw3/cw3">
                        <Altkom/>
                    </Route>
                    <Route path="./cw4/cw4">
                        <Testowa/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}