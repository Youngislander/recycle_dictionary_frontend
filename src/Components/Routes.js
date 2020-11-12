import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "./Routes/Feed";
import Auth from "./Routes/Auth";
import Explore from "./Routes/Explore";
import Search from "./Routes/Search";
import Profile from "./Routes/Profile";
import Upload from "./Routes/Upload";
import Detail from "./Routes/Detail";

const LoggedInRoutes = () => (
 <Switch>
  <Route exact path="/" component={Feed} />
  <Route path="/explore" component={Explore} />
  <Route path="/search" component={Search} />
  <Route path="/upload" component={Upload} />
  <Route exact path="/:username" component={Profile} />
  <Route exact path="/detail/:id" component={Detail} />
  <Redirect from="*" to="/" />
 </Switch>
);

const LoggedOutRoutes = () => (
 <Switch>
  <Route exact path="/" component={Feed} />
  <Route path="/explore" component={Explore} />
  <Route path="/search" component={Search} />
  <Route path="/upload" component={Auth} />
  <Route path="/login" component={Auth} />
  <Route exact path="/detail/:id" component={Detail} />
  <Redirect from="*" to="/" />
 </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
);

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;