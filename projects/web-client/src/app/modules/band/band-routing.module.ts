/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App imports
import { BandComponent } from './band/band.component';

/* ––
 * –––– Routes declaration
 * –––––––––––––––––––––––––––––––––– */
const routes: Routes = [
  { path: '', component: BandComponent }
];

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule { }
