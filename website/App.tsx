import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/run';
import Docs from './pages/docs';
import './App.less';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
