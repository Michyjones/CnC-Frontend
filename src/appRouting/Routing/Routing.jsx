import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../features/Home"));
const GetInTouch = lazy(() =>
  import("../../features/GetInTouch/GettingInTouch")
);
const FeedbackCard = lazy(() =>
  import("../../features/GetInTouch/FeedbackCard")
);
const Messages = lazy(() => import("../../features/Messages/Messages"));

const pageConnect = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/get-in-touch">
        <GetInTouch />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route exact path="/feedback">
        <FeedbackCard />
      </Route>
    </Switch>
  );
};

export default pageConnect;
