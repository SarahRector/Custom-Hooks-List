import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import QueenDetailPage from '../../pages/QueenDetailPage';
import QueenPage from '../../pages/QueenPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={QueenPage} />
        <Route exact path="/queens/:id" component={QueenDetailPage} />
      </Switch>
    </Router>
  );
}
