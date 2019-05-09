import React from 'react';
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Sidebar} from "./helpers/Sidebar";
import {Container, Content} from "./helpers/Styled";

import {Exercise1} from './exercices/01-simple-state/app'
import {Exercise1Solution} from './exercices/01-simple-state-solution/app'
import {Exercise2} from "./exercices/02-complex-state/app";
import {Exercise2Solution} from "./exercices/02-complex-state-solution/app";
import {Exercise3} from "./exercices/03-refs/app";
import {Exercise3Solution} from "./exercices/03-refs-solution/app";
import {Exercise4} from "./exercices/04-use-effect-1/app";
import {Exercise4Solution} from "./exercices/04-use-effect-1-solution/app";
import {Exercise5} from "./exercices/05-use-effect-2/app";
import {Exercise5Solution} from "./exercices/05-use-effect-2-solution/app";
import {Exercise6} from "./exercices/06-use-effect-3/app";
import {Exercise6Solution} from "./exercices/06-use-effect-3-solution/app";
import {Exercise7} from "./exercices/07-use-context/app";
import {Exercise7Solution} from "./exercices/07-use-context-solution/app";

export const App = () => (
  <BrowserRouter>
    <Sidebar/>
    <Content>
      <Switch>
        <Route path="/exercise-1" component={Exercise1}/>
        <Route path="/exercise-1-solution" component={Exercise1Solution}/>
        <Route path="/exercise-2" component={Exercise2}/>
        <Route path="/exercise-2-solution" component={Exercise2Solution}/>
        <Route path="/exercise-3" component={Exercise3}/>
        <Route path="/exercise-3-solution" component={Exercise3Solution}/>
        <Route path="/exercise-4" component={Exercise4}/>
        <Route path="/exercise-4-solution" component={Exercise4Solution}/>
        <Route path="/exercise-5" component={Exercise5}/>
        <Route path="/exercise-5-solution" component={Exercise5Solution}/>
        <Route path="/exercise-6" component={Exercise6}/>
        <Route path="/exercise-6-solution" component={Exercise6Solution}/>
        <Route path="/exercise-7" component={Exercise7}/>
        <Route path="/exercise-7-solution" component={Exercise7Solution}/>
        <Route render={() => <Container>Please pick an exercise</Container>}/>
      </Switch>
    </Content>
  </BrowserRouter>
);
