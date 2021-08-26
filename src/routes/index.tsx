import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Kitchen } from "../pages/Kitchen";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact />
      <Route component={Kitchen} path="/cozinha" />
    </Switch>
  );
};
