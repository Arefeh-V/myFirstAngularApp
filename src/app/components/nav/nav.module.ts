import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { navRoutes } from './nav.routes';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent],
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    RouterModule.forChild(navRoutes),
  ],
})
export class NavModule {}
