import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';
import Logout from './components/forms/Logout';
import MoneyTracker from './components/mtracker/MoneyTracker';
import CreateTrackerForm from './components/forms/CreateTrackerForm';
import Home from './components/common/Home';
import CreateExpenseForm from './components/forms/CreateExpenseForm';

const AppRouter  = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/home'  component={Home} />
            <Route path='/register'  component={RegisterForm} />
            <Route path='/login'  component={LoginForm} />
            <Route path='/logout'  component={Logout} />
            <Route path='/mtracker'  component={MoneyTracker} />
            <Route path='/createTracker'  component={CreateTrackerForm} />
            <Route path='/addExpense/:id'  render={(props) => <CreateExpenseForm forUpdate="true" {...props} /> } />
            {/* <Route path='/all/:foodId/:category?'  component={AllCatFood} />
            <Redirect to='/add' />
            <Route component={Home} />  */}
        </Switch>
    </div>
);

export default AppRouter;