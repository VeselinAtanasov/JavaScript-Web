import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import AddCatFood from './components/AddCatFood';
import AllCatFood from './components/AllCatFood';

/*
*Switch is optional it heelps to match only one routes instead to match more then one - in huge apps it is a good idea to have Switch
In Switch <Route component={Home} /> means in case of no match then this component will be render as a default
*/
const AppRouter  = () => (
    <div>
        <Switch>
            <Route path='/home'  component={Home} />
            <Route path='/add'  component={AddCatFood} />
            <Route path='/all/:foodId/:category?'  component={AllCatFood} />
            <Redirect to='/add' />
            <Route component={Home} />
        </Switch>
    </div>
);

export default AppRouter;