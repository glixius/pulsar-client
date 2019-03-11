/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { BandRoutingModule } from './band-routing.module';
import { BandComponent } from './band/band.component';

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [BandComponent],
  imports: [
    CommonModule,
    BandRoutingModule
  ]
})
export class BandModule { }
