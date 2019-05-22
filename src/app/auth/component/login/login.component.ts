import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.setMessage();
   }

  ngOnInit() {
  }

  setMessage(){
    this.message = 'Logged '+ (this.authService.isLoggedIn ? 'In' : 'Out');
  }

  login(){
    this.message = 'Trying to log in ......';

    this.authService.login().subscribe(() => {
      this.setMessage();

      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? 
                    this.router.parseUrl(this.authService.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
