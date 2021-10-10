import React, { Fragment } from 'react';
import Navbar from './conmponents/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';
import { Switch, Route } from 'react-router-dom'

const App = () => {


  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <TodosPage />} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </Fragment>
  );
}

export default App;


