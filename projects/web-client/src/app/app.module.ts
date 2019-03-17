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
import { MonitoringModule, AnalyticsProviders } from '@pulsar/monitoring';
import { environment } from '../environments/environment';

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
    CoreModule,
    MonitoringModule.forRoot({
      analytics: { provider: AnalyticsProviders.Google, trackingID: environment.analytics.trackingID },
      logging: environment.logging,
      debug: !environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
