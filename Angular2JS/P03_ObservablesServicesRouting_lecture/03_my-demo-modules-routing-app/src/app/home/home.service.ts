import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitHubProfile } from "./models/github-profile.model";

//I have to import the Injectable, but also VERY IMPORTANT to register HomeService in the provider array in the app.module.ts
@Injectable()
export class HomeService {
    constructor(private httpClient :HttpClient){

    }
    getGitHubProfile(profile : string){
        const url =`https://api.github.com/users/${profile}`;
        return this.httpClient.get<GitHubProfile>(url);
    }
}