
import RequestorService from './RequestorService';

let Requestor = new RequestorService();

class AuthService {
    constructor() {
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        // this.getUserProfile = this.getUserProfile.bind(this);
        // this.isLoggedIn = this.isLoggedIn.bind(this);
        // this.isAdmin = this.isAdmin.bind(this);
    }

    register(data) {
        console.log(data)
        return Requestor.post('user','','basic', data).then((res) => {
            console.log(res);
            this.setToken(res['_kmd']['authtoken']);
            return Promise.resolve(res);
        });
    }

    login(data) {
        return Requestor.post('user','/login','basic', data).then((res) => {
            this.setToken(res['_kmd']['authtoken']);
            return Promise.resolve(res);
        });
    }

    logout() {
        // helperService.notify('success', 'Logout successful!');
        localStorage.removeItem('token');
    }

    // getUserProfile() {
    //     try {
    //         const decoded = decode(this._getToken());

    //         return decoded.sub;
    //     } catch (err) {
    //         return undefined;
    //     }
    // }

    // isLoggedIn() {
    //     try {
    //         const decoded = decode(this._getToken());

    //         if (decoded.exp > Date.now() / 1000) {
    //             return true;
    //         }

    //         return false;
    //     } catch (err) {
    //         return false;
    //     }
    // }

    // isAdmin() {
    //     try {
    //         const decoded = decode(this._getToken());

    //         if (decoded.exp < Date.now() / 1000) {
    //             return false;
    //         }

    //         if (!decoded.sub.isAdmin) {
    //             return false;
    //         }

    //         return true;
    //     } catch (err) {
    //         return false;
    //     }
    // }

    setToken(token) {
        localStorage.setItem('authtoken', token);
    }

    getToken() {
        return localStorage.getItem('authtoken');
    }
}

export default AuthService;