import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { MonitorService } from '../services/shared/monitor.service';

@Component({
  selector: 'app-dashbook-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {

  public loggedIn = false;
  private loginData = new Subject<any>();
  login = this.loginData.asObservable();
  constructor(
    private authenticationService: AuthService,
    private monitorService: MonitorService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {

    this.monitorService.login.subscribe(
      data => {
        if (data){
          this.loggedIn = true;
      }},
    );

    if (this.authenticationService.isLoggedIn()){
      this.loggedIn = true;
    }
  }

  public logOut(): void{
    this.authenticationService.logout();
    this.loggedIn = false;
  }

  public signIn(): void{
    this.authenticationService.logout();
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }
}
