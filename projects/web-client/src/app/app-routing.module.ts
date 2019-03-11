/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* ––
 * –––– Routes definition
 * –––––––––––––––––––––––––––––––––– */
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'band', loadChildren: './modules/band/band.module#BandModule' },
  { path: '**' , redirectTo: 'band' },
];

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
