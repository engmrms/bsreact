import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Result from './wizered/Result';
import Step1 from './wizered/Step1';
import Step2 from './wizered/Step2';

export default function Wizered() {
  return (
    <Router>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/result" component={Result} />
    </Router>
  );
}
