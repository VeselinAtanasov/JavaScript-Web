
import requestor from './requester';
import helperService from './HelperService';
import observer from '../../core/observer/observer';
import AdminService from './AdminService';

export default {
    register: {
        send: function(data){
            return requestor.post('user', '', 'basic', data);
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
            localStorage.setItem('userId',res['_acl']['creator']);
            helperService.notify('success',`Welcome, ${res.username}`);
            observer.trigger(observer.events.loginUser, res.username);

            //Check if user is Admin:
            AdminService.isAdmin().then(res =>{
                localStorage.setItem('isAdmin',AdminService.fakeAdminId);
                if(res.length!==0){
                    if(res && res.length!==0 && res[0] && res[0].roleId && res[0].roleId === AdminService.adminId){
                        helperService.notify('success',`Hey, you are an Admin - you can modify site content!`);
                        localStorage.setItem('isAdmin',res[0].roleId);
                    }
                }
            }).catch(err =>   localStorage.setItem('isAdmin',localStorage.setItem('isAdmin',AdminService.fakeAdminId)));


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
    isAdmin : function(){
        return AdminService.adminId === localStorage.getItem('isAdmin');
    },
    isLoggedIn : function(){
        return localStorage.getItem('authtoken');
    },
    getUserName : function(){
        return localStorage.getItem('username');
    },
    getUserData : function(){
        return localStorage;
    }
};

