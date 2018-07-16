import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Mainpage from '../../Board/MainBoard/MainPage';
import NewBoard from '../../Board/RecievedBoard/NewBoard';
import Header from '../../Header';

const route = () => (
    <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/b/:id" component={NewBoard} />
        </Switch>
    </div>
)

export default route;