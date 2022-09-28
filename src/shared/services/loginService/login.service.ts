import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { LocalStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getCode(phone: string | null): Observable<any> {
    return this.http.post(environment.ServicesUrl + '/api/v1/ApiAccount/Otp', {
      phoneNumber: phone,
      returnUrl: null,
      // resendToken: null,
    });
  }

  sendCode(phone: string | null, code: string | null): Observable<any> {
    const data = `grant_type=phone_number_token&client_id=web-client-customer&client_secret=secret&phone_number=${phone}&verification_token=${code}`;
    return this.http.post(
      environment.Authurl + '/connect/token',
      data,
      httpOptions
    );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }

  register(email: string, username: string, password: string) {
    return { email, username, password };
    // return this.http.post(
    //   AUTH_API + 'signup',
    //   {
    //     username,
    //     email,
    //     password,
    //   },
    //   httpOptions
    // );
  }
}
