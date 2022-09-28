import { DatePipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/loginService/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LowerCasePipe],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    // private datePipe: DatePipe,
    private lcPipe: LowerCasePipe
  ) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    console.log(this.registerForm);
    this.authService.register(
      this.lcPipe.transform(this.registerForm?.get('email')?.value),
      this.registerForm?.get('username')?.value,
      this.registerForm?.get('password')?.value
    );
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {}
}
