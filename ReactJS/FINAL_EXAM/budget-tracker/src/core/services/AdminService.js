
import requestor from '../services/requester';

export default {
    isAdmin: async function() {
        let currentUserID = sessionStorage.getItem('userId');
        if(!currentUserID){
            return false;
        }
        let response = await requestor.get('user',`${currentUserID}/roles`,'master');
        
        return response;
    },
    adminId:"6b78e236-1962-451a-9673-4f877a5df08f",
    fakeAdminId: "6b78e236-1962-451a-1254-4f877a5df08f"
};
