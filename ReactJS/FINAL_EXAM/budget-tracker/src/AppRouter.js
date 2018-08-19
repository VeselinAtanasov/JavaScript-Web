import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterTest from './components/user/RegisterTest';
import LoginTest from './components/user/LoginTest';

const AppRouter  = () => (
    <div>
        <Switch>
            <Route path='/register'  component={RegisterTest} />
            <Route path='/login'  component={LoginTest} />
            {/* <Route path='/all/:foodId/:category?'  component={AllCatFood} />
            <Redirect to='/add' />
            <Route component={Home} />  */}
        </Switch>
    </div>
);

export default AppRouter;