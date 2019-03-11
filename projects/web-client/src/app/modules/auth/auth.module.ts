/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
