import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GitHubProfile } from './github-profile';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeService: HomeService;
  public profile: GitHubProfile;
  constructor(homeService: HomeService) {
    this.homeService = homeService;
  }

  ngOnInit() {
    this.homeService
      .getGitHubProfile('VeselinAtanasov')
      .subscribe(data => {
        this.profile = data
        console.log(this.profile)
      }, err =>{
        if(err){
          console.log(err);
          return;
        }
      });
  }
}
