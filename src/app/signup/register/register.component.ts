import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-dashbook-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    user: User;
    loading = false;
    submitted = false;

    private readonly username = 'username';
    private readonly password = 'password';
    private readonly firstname = 'firstname';
    private readonly lastname = 'lastname';
    private readonly email = 'email';

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
        });
    }

    onSubmit(): void {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.user = new User(
            this.registerForm.controls[this.username].value,
            this.registerForm.controls[this.password].value,
            this.registerForm.controls[this.firstname].value,
            this.registerForm.controls[this.lastname].value,
            this.registerForm.controls[this.email].value,
        );

        this.loading = true;
        this.userService.register(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/home']);
                },
                error => {
                    this.router.navigate(['/login']);
                });
    }
}
