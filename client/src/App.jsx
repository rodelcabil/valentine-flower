import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

const LazyMessagePage = lazy(() => import('./pages/MessagePage/message'));
const LazyFlowerPage = lazy(() => import('./pages/FlowerPage/flower'));



function App() {
  return (
    <>
      <Router basename='/'>
        {/* <Suspense fallback={<Loader />}> */}
          <Switch>
            <Route path="/" exact component={LazyMessagePage} />
            <Route path="/flowers" exact component={LazyFlowerPage} />
            
            {/* <Route component={LazyPageNotFoundPage} /> */}
          </Switch>
        {/* </Suspense> */}
      </Router>
    </>
  )
}

export default App