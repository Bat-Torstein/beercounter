import { Component } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor( private socialAuthService: AuthService ) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if ( socialPlatform === 'facebook' ) {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data' , userData);
      }
    );
  }
}