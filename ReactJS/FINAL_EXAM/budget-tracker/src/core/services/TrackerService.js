
import requestor from './requester';
import helperService from './HelperService';
import observer from '../../core/observer/observer';

export default {
    create: {
        send: function(data){
            return requestor.post('appdata', 'trackers', 'kinvey', data);
        },
        success: function(res) {
            //  localStorage.setItem('authtoken', res._kmd.authtoken);
            //   localStorage.setItem('username', res['username']);
            //   helperService.notify('success',`Welcome, ${res.username}`);
            this.props.history.push('/login');
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
            this.props.history.push('/login');
        },
    },
    login: {
        send: function(data){
            return requestor.post('user', 'login', 'basic', data);
        },
        success: function(res) {
            localStorage.setItem('authtoken', res._kmd.authtoken);
            localStorage.setItem('username', res['username']);
            helperService.notify('success',`Welcome, ${res.username}`);
            observer.trigger(observer.events.loginUser, res.username);
            this.props.history.push('/');
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
            //this.props.history.push('/register');
        },
    },
    logout:{
        send: function(){
            let req = requestor.post('user', '_logout', 'kinvey');
            return  req;
        },
        success: function(res) {
            const username = localStorage.getItem('username');
            helperService.notify('success',`Goodbye, ${username}`);  
            observer.trigger(observer.events.logoutUser);
            localStorage.clear();
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
        },
    },
    isLoggedIn : function(){
        return localStorage.getItem('authtoken');
    },
    getUserName : function(){
        return localStorage.getItem('UserName');
    }
};

