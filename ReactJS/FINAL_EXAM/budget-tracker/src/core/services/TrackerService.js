
import requestor from './requester';
import helperService from './HelperService';
import expenseService from './ExpenseService';
import expenseModel from '../models/ExpenseModel';

export default {
    create: {
        send: function (data) {
            return requestor.post('appdata', 'trackers', 'kinvey', data);
        },
        success: function (res) {
            helperService.notify('success', `You just created your own Budget Tracker!`);

            let trackerId = res['_id'];
            let initialExpense = expenseModel.initialState;
            initialExpense['trackerId']=trackerId;
            console.log(initialExpense);
            expenseService.create.send(initialExpense).then().catch(err =>helperService.notify('error',"Internal database error!"));
            this.props.history.push('/mtracker');
            
        },
        fail: function (err) {
            console.log(err);
            helperService.notify('error', err.responseJSON.description);
        },
    },
    updateWallet:{
        send: function (id) {
            const query = `trackers/`+id;
            return requestor.get('appdata', query, 'kinvey');
        },
        success: function (res) {
            helperService.notify('success', `Your Wallet has been recharged`);
            this.props.history.push('/mtracker');
        },
        fail: function (err) {
            helperService.notify('error', "Database failed. Please try again later!");
        },
        dataPreparation: function (dbResponse, state) {
            let obj = {};
            for (let s in state) {
                if (dbResponse.hasOwnProperty(s) && s !== 'trackerId') {
                    obj[s] =Math.round((Number(state[s]) + Number(dbResponse[s]))*100)/100;  
                } else if (s === 'trackerId') {
                    obj[s] = dbResponse[s];
                }
            }
            obj['trackerName']=dbResponse['trackerName'];
            obj['trackerDescription'] = dbResponse['trackerDescription'];
            obj['trackerUrl'] = dbResponse['trackerUrl'];
            return obj;
        },
        updateById: function (id, data) {
            const endpoint = 'trackers/' + id;
            return requestor.update('appdata', endpoint, 'kinvey', data);
        }
    },
    getTrackerByCreatorId: {
        send: function (userID) {
            const query = `trackers?query={"_acl.creator":"${userID}"}`;
            return requestor.get('appdata', query, 'kinvey');
        },
    },
    getTrackerById: {
        send: function (Id) {
            const query = `trackers/`+Id;
            return requestor.get('appdata', query, 'kinvey');
        },
    },
    getAllTrackers: {
        send: function(){
            return requestor.get('appdata', 'trackers', 'kinvey');
        }
    },
    deleteTrackerById: {
        send: function(id){
            return requestor.remove('trackers',id,'master');
        }
    }
};

