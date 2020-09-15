import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/notifications/alert.service';
import { User } from 'src/app/model/user';
import { MonitorService } from 'src/app/services/shared/monitor.service';

@Component({
  selector: 'app-dashbook-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    invaliCred = false;
    returnUrl: string;
    private user: User;

    private readonly username = 'username';
    private readonly password = 'password';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private changeMonitorService: MonitorService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.isLoggedIn()) { 
            this.router.navigate(['my-home']);
        }
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = '/my-home';
    }

    onSubmit(): void {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.user = new User(
            this.loginForm.controls[this.username].value,
            this.loginForm.controls[this.password].value
        );

        this.authenticationService.login(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    if(data){
                        this.changeMonitorService.setLoginFlag(true);
                        this.router.navigate([this.returnUrl]);

                    } else {
                        this.invaliCred = true;
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
