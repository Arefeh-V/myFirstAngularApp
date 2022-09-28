import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/loginService/login.service';
import { tokenStorageService } from 'src/shared/services/loginService/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasCode: boolean = false;
  codeForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: tokenStorageService
  ) {
    this.loginForm = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        // Validators.maxLength(11),
        // Validators.pattern('/^[0-9]*$/'),
      ]),
    });
    this.codeForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
    });
  }

  sendPhone() {
    console.log(this.loginForm);
    this.authService
      .getCode(this.loginForm?.get('phone')?.value)
      .subscribe((data) => {
        console.log('code :: ', data.result[1].value);
        this.hasCode = true;
      });
  }

  sendCode() {
    console.log(this.codeForm);
    this.authService
      .sendCode(
        this.loginForm?.get('phone')?.value,
        this.codeForm?.get('code')?.value
      )
      .subscribe((data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['/home']);
      });
  }

  ngOnInit(): void {}
}
