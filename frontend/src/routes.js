import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Logon} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
