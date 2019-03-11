/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party imports
import { StoreModule } from '@ngrx/store';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pulsarReducers, metaReducers } from './store';
import { CoreModule } from './modules';

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(pulsarReducers, { metaReducers }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
