
import requestor from './requester';
import helperService from './HelperService';
import expenseService from './ExpenseService';
import expenseModel from '../models/ExpenseModel'

export default {
    create: {
        send: function (data) {
            return requestor.post('appdata', 'trackers', 'kinvey', data);
        },
        success: function (res) {
            helperService.notify('success', `You just created your own Budget Tracker!`);
            this.props.history.push('/mtracker');
            let trackerId = res['_id'];
            let initialExpense = expenseModel.initialState;
            initialExpense['trackerId']=trackerId;
            expenseService.create.send(initialExpense).then(data => console.log(data)).catch(err => console.log(err));
            
        },
        fail: function (err) {
            helperService.notify('error', err.responseJSON.description);
        },
    },
    getTrackerByCreatorId: {
        send: function (userID) {
            const query = `trackers?query={"_acl.creator":"${userID}"}`;
            return requestor.get('appdata', query, 'kinvey');
        },
    },
    getAllTrackers: {
        send: function(){
            return requestor.get('appdata', 'trackers', 'kinvey');
        }
    }
};

