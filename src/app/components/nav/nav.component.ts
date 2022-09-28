// import { Component, Input, OnInit } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';
import { tokenStorageService } from 'src/shared/services/loginService/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  title = 'my app';

  constructor(private tokenservice: tokenStorageService) {}
  logout() {
    this.tokenservice.signOut();
  }
  ngOnInit(): void {}
}
