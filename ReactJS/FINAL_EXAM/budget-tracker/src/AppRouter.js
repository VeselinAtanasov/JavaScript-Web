import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterForm from './components/forms/RegisterForm';
import LoginForm from './components/forms/LoginForm';
import Logout from './components/forms/Logout';
import MoneyTracker from './components/mtracker/MoneyTracker';
import CreateTrackerForm from './components/forms/CreateTrackerForm';
import Home from './components/common/Home';
import CreateExpenseForm from './components/forms/CreateExpenseForm';
import WalletForm from './components/forms/WalletForm';
import TrackerDetails from './components/mtracker/TrackerDetails';
import TrackerReport from './components/mtracker/TrackerReport';
import NotFound from './components/common/NotFound';
import AdminPanel from './components/admin/AdminPanel';
import AuthService from './core/services/AuthService';

const isAdmin = AuthService.isAdmin();
const isLoggedIn = AuthService.isLoggedIn();
console.log(isAdmin);
const AppRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={LoginForm} />
            <Route path='/logout' component={Logout} />

            <Route path='/mtracker'  render={() => !isLoggedIn ? <Redirect to="/" /> : <MoneyTracker />}  />
            <Route path='/createTracker' render={() => !isLoggedIn ? <Redirect to="/" /> : <CreateTrackerForm />}  />
            <Route path='/addExpense/:id' render={(props) =>  !isLoggedIn ? <Redirect to="/" /> : <CreateExpenseForm forUpdate="true" {...props} />} />
            <Route path='/fillWallet/:id' render={(props) =>  !isLoggedIn ? <Redirect to="/" /> : <WalletForm forUpdate="true" {...props} />} />
            <Route path='/trackDetails/:id' render={() => !isLoggedIn ? <Redirect to="/" /> : <TrackerDetails />}  />
            <Route path='/report/:id' render={() => !isLoggedIn ? <Redirect to="/" /> : <TrackerReport />}  />

            <Route exact path="/admin" render={() => !isAdmin ? <Redirect to="/" /> : <AdminPanel />} />
            <Route path="/admin/allUsers" render={() => !isAdmin ? <Redirect to="/" /> : <AdminPanel />} />
            <Route path="/admin/allTrackers" render={() => !isAdmin ? <Redirect to="/" /> : <AdminPanel />} />

            <Route component={NotFound} />  }
        </Switch>
    </div>
);

export default AppRouter;