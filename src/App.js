import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home.js';
const Mint = React.lazy(() => import('./pages/Mint.js'));
const NotFound = React.lazy(() => import('./pages/NotFound.js'));

function App() {
  const ghostCat = require('./images/OG Cat.gif').default;
  return (
    <Suspense
      fallback={
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ghostCat} alt={'Ghost Cat'} />
        </div>
      }
    >
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/mint" component={NotFound} exact />
          <Route path="/supersecretcatclub" component={Mint} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
