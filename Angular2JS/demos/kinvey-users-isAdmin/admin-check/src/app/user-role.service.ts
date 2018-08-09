import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const appKey = "kid_B1UadEnVQ" // APP KEY HERE;
const appSecret = "d856bfb0d1e44ae5ba534e8328127eea" // APP SECRET HERE;
const masterSecret = "e60e6ef53c68450f951ce8ad9ff5c53a"; //Used for the roles
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const roleUrl = `https://baas.kinvey.com/roles/${appKey}`
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

const userIdRole = `https://baas.kinvey.com/user/${appKey}/`;
///user/:appKey/:userId/roles

@Injectable()
export class UserRoleService {
    constructor(private http: HttpClient) { }

    // register(user) {
    //     return this.http
    //         .post(registerUrl, user, {
    //             headers: new HttpHeaders({
    //                 'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
    //                 'Content-Type': 'application/json'
    //             })
    //         })
    // }
    // login(user) {
    //     return this.http
    //         .post(loginUrl, user, {
    //             headers: new HttpHeaders({
    //                 'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
    //                 'Content-Type': 'application/json'
    //             })
    //         })
    // }

    /**
     * This Method creates Role the response contains RoleID,RoleName,RoleDescription
     * @param user 
     */
    createRole(user) {
        return this.http
            .post(roleUrl, user, {
                headers: new HttpHeaders({
                    'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                    'Content-Type': 'application/json'
                })
            })
    }

    /**
     * This method assigns Role to a specific user;
     * There is an option to assign one Role to bulk of users :https://devcenter.kinvey.com/rest/guides/roles
     * @param userId 
     * @param userRoleId 
     */
    assignRoleToUser(userId, userRoleId) {
        let url = userIdRole + userId + '/roles/' + userRoleId
        console.log(url)
        return this.http.put(url, JSON.stringify({}), {
            headers: new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                'Content-Type': 'application/json'
            })
        })

        // 
        //send a PUT request to /user/:appKey/:userId/roles/:roleId with an empty JSON body.
    }

    /**
     * This method returns array of all Roles for which the user is subscribed.
     * The array contains object which RoleId, RoleName is NOT present
     * @param userId 
     */
    getRoleByUserId(userId) {
        let url = userIdRole + `${userId}/roles`
        return this.http
            .get(url, {
                headers: new HttpHeaders({
                    'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                    'Content-Type': 'application/json'
                })
            })
    }

    /**
     * This method deletes role From a user
     * @param userId 
     * @param userRoleId 
     */
    deleteRoleFromUser(userId, userRoleId){
        let url = userIdRole + userId + '/roles/' + userRoleId
        console.log(url)
        return this.http.delete(url, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                'Content-Type': 'application/json'
            })
        })

        //DELETE request to /user/:appKey/:userId/roles/:roleId
    }

    /**
     * This method is used to return array of all users currently residing in this Role
     *  Example of the response : {grantDate : "2018-08-09T08:44:24.937Z",grantedBy : "kid_B1UadEnVQ",userId : "5b5ed173103c460eb9f945f8 }
     * @param roleId 
     * 
     */
    getAllRoleMembers(roleId){
        let url = roleUrl +'/' +roleId+'/membership'
        return this.http
            .get(url, {
                headers: new HttpHeaders({
                    'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                    'Content-Type': 'application/json'
                })
            })
        //GET request to /roles/:appKey/:roleId/membership
    }

    /**
     * This method returns all defined Roles in array of object, each one containing RoleID, RoleName,RoleDescription
     */
    listAllRoles(){
        return this.http
        .get(roleUrl, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                'Content-Type': 'application/json'
            })
        })
        //send a GET request to /roles/:appKey.
    }

    /**
     * This method is used to return object with RoleId and corresponding Role Name
     * @param roleID string representing currentRoleId
     */
    getSpecificRole(roleID){
        let url =roleUrl+'/'+roleID
        return this.http
        .get(url, {
            headers: new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                'Content-Type': 'application/json'
            })
        })
        //To fetch a specific role, send a GET request to /roles/:appKey/:roleId.
    }


    

}