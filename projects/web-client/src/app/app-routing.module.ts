/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* ––
 * –––– Routes definition
 * –––––––––––––––––––––––––––––––––– */
const routes: Routes = [];

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
