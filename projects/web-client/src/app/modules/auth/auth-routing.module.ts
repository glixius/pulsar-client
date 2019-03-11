/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports
import { LoginComponent } from './login/login.component';

/* ––
 * –––– Routes declaration
 * –––––––––––––––––––––––––––––––––– */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
