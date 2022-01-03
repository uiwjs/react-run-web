import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/run';
import Docs from './pages/docs';
import './App.less';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
