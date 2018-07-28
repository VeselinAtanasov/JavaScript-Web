import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GitHubProfile } from './models/github-profile.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public profile: GitHubProfile;
  constructor(private homeService: HomeService ) {
    this.homeService = homeService;
  }

  ngOnInit() {
    this.homeService
      .getGitHubProfile('VeselinAtanasov')
      .subscribe(data => {
        this.profile = data
        console.log(this.profile)
        //If we wna tto redirect aour use to sepcific page inject router: Router and use:
       //  this.router.navigateByUrl('/about');
      }, err =>{
        if(err){
          console.log(err);
          return;
        }
      });
  }
}
