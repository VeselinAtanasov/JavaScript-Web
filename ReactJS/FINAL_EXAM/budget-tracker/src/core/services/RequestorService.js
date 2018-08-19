const baseUrl = "https://baas.kinvey.com/";
const appKey =   'kid_rkl2qgw87';
const appSecret =   'b8efaaa893f64aafb3ebb61bd9201e47';

class RequestorService {
    constructor() {
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        // this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);
    }

    get(module, endpoint, auth ) {
        const url = baseUrl + module + '/' + appKey + '/' + endpoint;
        return fetch(url, this.makeRequest('GET', auth)).then((res) => {
            return res.json();
        }).then((res) => {
            return Promise.resolve(res);
        });
    }

    post (module, endpoint, auth, data) {
        const url = baseUrl + module + '/' + appKey +endpoint;
        return fetch(url, this.makeRequest('POST', auth,data)).then((res) => {
            return res.json();
        }).then((res) => {
            return Promise.resolve(res);
        });
    }

    makeRequest(method, auth,data) {
        let obj= {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.makeAuth(auth),
            }
        };
        if(data){
            obj['body']=JSON.stringify(data);
        }
        return obj;
    }
    makeAuth(type) {
        return type === 'basic'
            ? 'Basic ' + btoa(appKey + ':' + appSecret)
            : 'Kinvey ' + localStorage.getItem('authtoken');
    }

    // post(endpoint, body, token) {
    //   return this._fetch(`${this.domain}${endpoint}`, {
    //     method: 'POST',
    //     body: JSON.stringify(body)
    //   }, token).then((res) => {
    //     return Promise.resolve(res);
    //   });
    // }

    // update(endpoint, body, token) {
    //   return this._fetch(`${this.domain}${endpoint}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(body)
    //   }, token).then((res) => {
    //     return Promise.resolve(res);
    //   });
    // }

    // delete(endpoint, token) {
    //   return this._fetch(`${this.domain}${endpoint}`, {
    //     method: 'DELETE',
    //   }, token).then((res) => {
    //     return Promise.resolve(res);
    //   });
    // }


}

export default RequestorService;