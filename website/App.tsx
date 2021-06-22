import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import styles from './App.module.less';
import Home from './pages/run';
import Docs from './pages/docs';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className={styles.warpper}>
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
