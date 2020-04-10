import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../containers/Layout';

const App = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route component={NotFound} key="error404" />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default App;
