
import requestor from './requester';
import helperService from './HelperService';


export default {
    create: {
        send: function (data) {
            return requestor.post('appdata', 'expenses', 'kinvey', data);
        }
    },
    update: {
        send: function (id) {
            const query = `expenses?query={"trackerId":"${id}"}`;
            return requestor.get('appdata', query, 'kinvey');
        },
        success: function (res) {
            helperService.notify('success', `New expense were added to the virtual wallet!`);
            this.props.history.push('/mtracker');
        },
        fail: function (err) {
            helperService.notify('error', "Database failed. Please try again later!");
        },
        dataPreparation: function (dbResponse, state) {
            let obj = {};
            for (let s in state) {
                if (dbResponse.hasOwnProperty(s) && s !== 'trackerId') {
                    obj[s] = Math.round((Number(state[s]) + Number(dbResponse[s])) * 100) / 100;
                } else if (s === 'trackerId') {
                    obj[s] = dbResponse[s];
                }
            }
            return obj;
        },
        updateById: function (id, data) {
            const endpoint = 'expenses/' + id;
            return requestor.update('appdata', endpoint, 'kinvey', data);
        }
    },
    getExpenseByTrackerId: {
        send: function (id) {
            const query = `expenses?query={"trackerId":"${id}"}`;
            return requestor.get('appdata', query, 'kinvey');
        }
    },
    getExpenseByCreatorId: {
        send: function (id) {
            const query = `expenses?query={"_acl.creator":"${id}"}`;
            return requestor.get('appdata', query, 'kinvey');
        }
    },
    getAllExpenses: {
        send: function () {
            return requestor.get('appdata', 'expenses', 'kinvey');
        }
    },
    deleteExpenseById: {
        send: function(id){
            const url = 'expenses/'+id;
            return requestor.remove('appdata',url,'master');
        }
    }
};

