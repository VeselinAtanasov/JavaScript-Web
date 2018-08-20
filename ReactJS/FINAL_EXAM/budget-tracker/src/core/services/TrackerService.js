
import requestor from './requester';
import helperService from './HelperService';
import observer from '../../core/observer/observer';

export default {
    create: {
        send: function (data) {
            return requestor.post('appdata', 'trackers', 'kinvey', data);
        },
        success: function (res) {
            helperService.notify('success', `You just created your own Budget Tracker!`);
            this.props.history.push('/mtracker');
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

