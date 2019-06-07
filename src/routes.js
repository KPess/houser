import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Wizard from './Components/Wizard';

export default (
    <Switch>
        <Route component={Dashboard} path="/" />
        <Route component={Wizard} path="/add" />
        <Route component={Wizard} path="/edit/:id" />
    </Switch>
);