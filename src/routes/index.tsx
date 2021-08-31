import React from "react";
import { Route, Switch } from "react-router-dom";
import Globalcontext from "../context/orders";
import { Dashboard } from "../pages/Dashboard";
import { Kitchen } from "../pages/Kitchen";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Globalcontext>
        <Route component={Dashboard} path="/" exact />
        <Route component={Kitchen} path="/cozinha" />
      </Globalcontext>
    </Switch>
  );
};
