/* ––
 * –––– Imports
 * –––––––––––––––––––––––––––––––––– */
// Platform imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ––
 * –––– Module declaration
 * –––––––––––––––––––––––––––––––––– */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
