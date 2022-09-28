import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/shared/services/userService/users.service';
import { user } from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: user[];
  constructor(private userservice: UsersService) {}

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
