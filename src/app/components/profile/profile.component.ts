import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/shared/services/userService/users.service';
import { user } from '../home/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: user;
  id: string | null;
  sub: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userservice: UsersService
  ) {}

  ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.userservice.getUserById(this.id).subscribe((data) => {
        this.user = data;
      });
      // let products = this._productService.getProducts();
      // this.product = products.find((p) => p.productID == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack() {
    this._router.navigate(['/home']);
    return false;
  }
}
