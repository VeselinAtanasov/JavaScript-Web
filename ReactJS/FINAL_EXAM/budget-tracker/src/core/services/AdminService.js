
import requestor from '../services/requester';
import trackerService from '../services/TrackerService';
import expenseService from '../services/ExpenseService';
import authService from '../services/AuthService';

export default {
    isAdmin: async function () {
        let currentUserID = sessionStorage.getItem('userId');
        if (!currentUserID) {
            return false;
        }
        let response = await requestor.get('user', `${currentUserID}/roles`, 'master');

        return response;
    },
    adminId: "6b78e236-1962-451a-9673-4f877a5df08f",
    fakeAdminId: "6b78e236-1962-451a-1254-4f877a5df08f",

    getAllUsers: {
        send: function () {
            return requestor.get('user', '', 'master');
        }
    },
    deleteUser: {
        send: function (id) {
            return requestor.remove('user', id, 'master');
        }
    },
    // deleteExpenseByUserId: {
    //     send: function (userId) {
    //         //delete expenses:
    //         expenseService.getExpenseByCreatorId.send(userId).then(expense => {
    //             console.log('EEEEE');
    //             console.log(expense);
    //             let id = expense[0]['_id'];
    //             return expenseService.deleteExpenseId.send(id);
    //         }).catch(err => console.log(err));
    //     }
    // },
    // deleteTrackerByUserId: {
    //     send: function (userId) {
    //         //delete expenses:
    //         trackerService.getTrackerByCreatorId.send(userId).then(expense => {
    //             console.log(expense);
    //             let id = expense[0]['_id'];
    //             return trackerService.deleteTrackerById.send(id);
    //         }).catch(err => console.log(err));
    //     }
    // },
    // deleteAllRecordsByUserId: {
    //     send: function (userId) {
    //         //delete tracker:
    //         let getPromiseTracker  = trackerService.getTrackerByCreatorId.send(userId);
    //         let getPromiseExpense =  expenseService.getExpenseByCreatorId.send(userId);

    //         Promise.all([getPromiseTracker, getPromiseExpense]).then(function(values) {
    //             console.log(values);
    //             let trackerId = values[0]['_id'];
    //             let expenseId = values[1]['_id'];
    //             let deletePromiseTracker = trackerService.deleteTrackerById.send(trackerId);
    //             let deletePromiseExpense = expenseService.deleteExpenseId.send(expenseId);
    //             return Promise.all([deletePromiseTracker,deletePromiseExpense]);
    //         });

             
    //     }
    // }
};
