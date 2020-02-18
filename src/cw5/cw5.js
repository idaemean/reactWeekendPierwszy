import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MyForm from "../cw1/cw1"
import Parent from "../cw2/cw2"
import Calc from "../cw3/cw3"
import LifecycleTest from "../cw4/cw4"


export default function Switcher() {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="../cw1/cw1">MyForm</Link>
                    </li>
                    <li>
                        <Link to="../cw2/cw2">Parent</Link>
                    </li>
                    <li>
                        <Link to="../cw3/cw3">Calc</Link>
                    </li>
                    <li>
                        <Link to="../cw4/cw4">LifecycleTest</Link>
                    </li>



                </ul>

                <Switch>
                    <Route path="../cw1/cw1">
                        <MyForm/>
                    </Route>

                    <Route path="../cw2/cw2">
                        <Parent/>
                    </Route>

                    <Route path="../cw3/cw3">
                        <Calc/>
                    </Route>


                    <Route path="../cw4/cw4">
                        <LifecycleTest/>
                    </Route>


                </Switch>

            </div>


        </Router>
    );

}