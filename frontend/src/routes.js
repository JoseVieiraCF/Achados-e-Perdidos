import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Items from './pages/Items';
import Login from './pages/Login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/items' component={Items}/>
                <Redirect path='*' to='/'/>
            </Switch>
        </BrowserRouter>
    );


}